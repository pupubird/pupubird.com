<style>
  .btn {
    width: 57px;
    height: 57px;
    background: linear-gradient(
      134.98deg,
      #e9e9e9 0%,
      #fefefe 52.08%,
      #fefefe 100%
    );
    box-shadow: 7px 6px 4px rgba(149, 146, 146, 0.5);
    border-radius: 15px;
    border: none;
  }
  .btn__p {
    font-family: var(--sub-title-font);
    color: #6d6d6d;
    font-size: 14px;
    line-height: 11px;
    text-align: center;
    letter-spacing: 0.19em;
    padding-left: 8px;
    margin-top: 9px;
  }
  .Btn__div--edit {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    order: 0;
    margin-right: 10px;
  }
  .Btn__div--share {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    order: 1;
  }
  .BtnGroup {
    position: absolute;
    bottom: 1vh;
    right: 5vw;
    display: flex;
  }
  .edit {
    padding: 4px 0 0 2px;
  }
  @media screen and (max-width: 850px) {
    .BtnGroup {
      display: none;
    }
    .Btn__div--share {
      order: 0;
    }
    .Btn__div--edit {
      order: 1;
      margin-right: 0px;
    }
  }
  @media screen and (max-width: 1000px) {
    .BtnGroup {
      flex-direction: column;
    }
    .Btn__div--share {
      order: 0;
    }
    .Btn__div--edit {
      order: 1;
      margin-right: 0px;
    }
  }
</style>

<div class="BtnGroup">
  <div class="Btn__div--edit">
    <button class="btn">
      <img src="build/assets/edit.svg" alt="edit" class="edit" />
    </button>
    <p class="btn__p">Edit this website</p>
  </div>
  <div class="Btn__div--share">
    <button class="btn">
      <img src="build/assets/share.svg" alt="share" />
    </button>
    <p class="btn__p">Share</p>
  </div>
</div>
