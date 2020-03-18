<script>
  import { createEventDispatcher } from "svelte";
  export let current_value = 1;
  export let current = "Home";
  let width = 0;
  const dispatch = createEventDispatcher();
  function left() {
    dispatch("message", {
      action: "left",
      width: width
    });
  }
  function right() {
    dispatch("message", {
      action: "right",
      width: width
    });
  }
</script>

<style>
  .tabs {
    overflow-x: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    border-radius: 9px;
    width: 83%;
    margin: 15vh 8.5% 0;
  }

  .show {
    background: #ffffff;
    box-shadow: inset 10px 10px 10px rgba(194, 194, 194, 0.25);
    padding: 8px 5px;
    border-radius: 9px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .tabs__title {
    color: #515151;
    font-family: var(--sub-title-font);
    font-weight: bold;
    padding: 0;
    margin: 0;
    text-align: center;
  }
</style>

<div class="tabs">
  <div />
  <div class="show" bind:offsetWidth={width}>
    <img
      on:click={left}
      src="build/assets/left_arrow.svg"
      alt="left_arrow"
      style="display:{current_value === 0 ? 'none' : 'block'};" />
    <p class="tabs__title">{current}</p>

    <img
      on:click={right}
      style="display:{current_value === 2 ? 'none' : 'block'};"
      src="build/assets/right_arrow.svg"
      alt="right_arrow" />
  </div>
  <div />
</div>
