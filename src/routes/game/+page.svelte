<script lang="ts">
  import type { PageData } from './$types';
  
  export let data: PageData;
</script>

<h1>Game Board</h1>

<div class="game-board">
  {#each data.categories as category}
      <div class="category">
          <h2>{category.category}</h2>
      </div>
  {/each}
</div>

<style>
  .game-board {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 1rem;
      padding: 1rem;
  }

  .category {
      background-color: #060CE9;
      color: white;
      padding: 1rem;
      text-align: center;
      border-radius: 4px;
  }

  h2 {
      font-size: 1rem;
      margin: 0;
  }
</style>