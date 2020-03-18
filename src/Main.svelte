<script>
  import Plastic from "./components/Plastic.svelte";
  import HomeTabBody from "./components/HomeTabBody.svelte";
  import ShowcaseTabBody from "./components/ShowcaseTabBody.svelte";
  import ContactTabBody from "./components/ContactTabBody.svelte";
  import TabHeader from "./components/TabHeader.svelte";
  import TabHeaderOverlay from "./components/TabHeaderOverlay.svelte";
  export let width = 0;

  let marginLeft = 8.5;
  let initialMarginLeft = 8.5;
  let tabs = ["contact", "Home", "showcase"];
  let current_value = 1;
  let current = tabs[current_value];
  function handleTab(e) {
    let action = e.detail.action;
    let d_width = e.detail.width;
    let res = (d_width / width) * 100;
    if (current_value !== 0 && action === "left") {
      marginLeft += res;
      current_value -= 1;
    } else if (current_value !== tabs.length - 1 && action === "right") {
      current_value += 1;
      marginLeft -= res;
    }
    current = tabs[current_value];
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  .content {
    margin: 23vh 6.5% 0;
    height: 70vh;
    width: 87%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    background: #ffffff;
    box-shadow: inset 10px 10px 10px rgba(194, 194, 194, 0.25);
    border-radius: 21px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .tabs {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    margin: 15vh 8.5% 0;
    width: 83%;
    transition-property: margin-left, margin-right;
    transition-duration: 0.25s;
    transition-timing-function: ease-in-out;
    overflow-x: hidden;
  }
  @media screen and (max-width: 400px) {
    .tabs {
      position: fixed;
    }
  }
</style>

<div>
  <Plastic />
  <TabHeaderOverlay on:message={handleTab} {current} {current_value} />
  <div
    class="tabs"
    style="margin-left:{marginLeft}%; margin-right:{initialMarginLeft + (initialMarginLeft - marginLeft)}%;
    max-width:{width}px">
    <TabHeader />
  </div>
  <div class="content">
    {#if current_value == 0}
      <ContactTabBody />
    {:else if current_value == 1}
      <HomeTabBody />
    {:else}
      <ShowcaseTabBody />
    {/if}
  </div>
</div>
