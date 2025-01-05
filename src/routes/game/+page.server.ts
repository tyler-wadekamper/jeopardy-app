import type { PageServerLoad } from "./$types";

interface Category {
  category: string;
  clue_count: number;
}

interface ApiResponse {
  status: string;
  data: Category[];
}

export const load: PageServerLoad = async () => {
  try {
    const response = await fetch("http://cluebase.lukelav.in/categories");
    const data: ApiResponse = await response.json();

    // Randomly select 6 categories
    const shuffled = data.data.sort(() => 0.5 - Math.random());
    const selectedCategories = shuffled.slice(0, 6);

    return {
      categories: selectedCategories,
    };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return {
      categories: [],
    };
  }
};
