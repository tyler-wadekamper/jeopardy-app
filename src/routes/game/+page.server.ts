interface Question {
  id: number;
  question: string;
  answer: string;
  value: number;
}

interface Category {
  category: string;
  clue_count: number;
  questions?: Question[];
}

interface ApiResponse {
  status: string;
  data: Category[];
}

export const load: PageServerLoad = async () => {
  try {
    // Fetch first 3 categories in common categories
    const offset1 = Math.floor(Math.random() * 100);
    const response1 = await fetch(
      `http://cluebase.lukelav.in/categories?limit=3&offset=${offset1}`
    );
    const data1: ApiResponse = await response1.json();

    // Fetch second 3 categories with uncommon
    const offset2 = Math.floor(Math.random() * 4000);
    const response2 = await fetch(
      `http://cluebase.lukelav.in/categories?limit=3&offset=${offset2}`
    );
    const data2: ApiResponse = await response2.json();

    // Combine the categories
    const selectedCategories = [...data1.data, ...data2.data];

    // Fetch 5 questions for each category
    const categoriesWithQuestions = await Promise.all(
      selectedCategories.map(async (category) => {
        const url = `http://cluebase.lukelav.in/clues/random?category=${encodeURIComponent(
          category.category.toLowerCase()
        )}&limit=5`;
        console.log("Fetching questions from:", url);
        const questionsResponse = await fetch(url);
        const questionsData = await questionsResponse.json();

        // Randomly select 5 questions
        const randomQuestions = questionsData.data
          .sort(() => 0.5 - Math.random())
          .slice(0, 5);

        return {
          ...category,
          questions: randomQuestions,
        };
      })
    );

    return {
      categories: categoriesWithQuestions,
    };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return {
      categories: [],
    };
  }
};
