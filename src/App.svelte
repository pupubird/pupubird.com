<script>
  import Main from "./Main.svelte";
  import BottomLeft from "./components/BottomLeft.svelte";
  import BottomRight from "./components/BottomRight.svelte";
  import { onMount } from "svelte";
  let width = 0;
  let card;
  $: {
    width = card;
    if (width > 450) {
      width = 450;
    }
  }
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Playfair+Display|Roboto:400,700|Tangerine&display=swap");
  * {
    margin: 0;
    padding: 0;
  }

  .card_wrapper {
    max-width: 400px;
    margin: auto;
    height: 100vh;
  }
  .body {
    height: 100vh;
    overflow-x: hidden;
  }
  :global(:root) {
    --title-font: "Playfair Display", serif;
    --sub-title-font: "Roboto", sans-serif;
    --paragraph-font: "Times New Roman", Times, serif;
    --signature-font: "Tangerine", cursive;
  }
  @media screen and (min-width: 650px) {
    .card_wrapper {
      max-width: 450px;
      margin: auto;
    }
  }
  @media screen and (max-width: 650px) {
    .card_wrapper {
      max-width: 450px;
      margin: auto;
    }
  }
  @media screen and (max-width: 500px) {
    .card_wrapper {
      max-width: 400px;
      margin: auto;
    }
  }
</style>

<div class="body">
  <div class="card_wrapper" bind:offsetWidth={card}>
    <Main {width} />
  </div>
  <BottomLeft />
  <BottomRight />
</div>
