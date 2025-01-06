<script lang="ts">
  import type { PageData } from './$types';
  import { playerName, playerScore } from '$lib/stores';
  export let data: PageData;
</script>

<div class="game-board">
  {#each data.categories as category}
    <div class="category-column">
      <div class="category-header">
        <h2>{category.category}</h2>
      </div>
      {#if category.questions}
        {#each category.questions as question, index}
          <div class="question-tile">
            {question.value = (index + 1) * 200}
            <p>${question.value}</p>
            <!-- <p>{question.clue}</p> -->
          </div>
        {/each}
      {/if}
    </div>
  {/each}
</div>

<div class="player-info">
  <p>Player: {$playerName}</p>
  <p>Score: ${$playerScore}</p>
</div>

<style>
  .game-board {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0.5rem;
    padding: 1rem;
  }

  .category-column {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .category-header {
    background-color: #060CE9;
    color: white;
    padding: 1rem;
    text-align: center;
    border-radius: 4px;
  }

  .question-tile {
    background-color: #060CE9;
    color: white;
    padding: 1rem;
    text-align: center;
    border-radius: 4px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-size: 1.2rem;
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 2rem;
  }
</style>