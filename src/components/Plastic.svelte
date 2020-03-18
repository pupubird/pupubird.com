<style>
  * {
    margin: 0;
    padding: 0;
  }
  .plastic_wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }
  .plastic {
    max-width: 95%;
    height: 94vh;
    margin-top: 2vh !important;
    background: linear-gradient(151.57deg, #ffffff 6.68%, #f1f1f1 100%);
    opacity: 0.8;
    box-shadow: 4px 4px 4px #e8e8e8;
    border-radius: 15px;
    border: 1px solid #e4e4e4;
    margin: auto;
  }
  .logo {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    padding: 5vh 8.5%; /*  2vh 3.5vw; */
  }
  .logo__p {
    font-family: var(--sub-title-font);
    font-weight: bold;
    font-size: 16px;
    padding-top: 5%;
  }
</style>

<div class="plastic_wrapper">
  <div class="plastic" />
  <div class="logo">
    <img src="build/assets/logo.svg" alt="logo" />
    <p class="logo__p">@rainchai4240</p>
  </div>
</div>
