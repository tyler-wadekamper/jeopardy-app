<script>
  import { goto } from '$app/navigation';
  import { playerName, playerScore } from '$lib/stores';

  let player_name = '';

  async function start_game() {
    $playerName = player_name;
    $playerScore = 0;
    console.log("Starting game with player:", player_name);
    await goto('/game'); // Navigate to the game page
  }
</script>

<h1>This is Jeopardy!</h1>

<input type="text" bind:value={player_name} />

<button on:click={start_game}>Start Game</button>