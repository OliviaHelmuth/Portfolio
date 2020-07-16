<template>
  <div>
    <navbar id="navbar2"></navbar>
    <div class="container centered-container">
      <div id="container">
        <div class="box item-a animate__animated animate__fadeInLeftBig">
          <a href="https://oh-calculator.netlify.app/index2" target="_blank">
            <img class="image calc-img" src="./../pictures/calc.png" alt="calc picture" />
          </a>
        </div>
        <div class="box item-b animate__animated animate__fadeInDownBig">
          <a href="https://oh-marsweatherapp.netlify.app/" target="_blank">
            <img class="image" src="./../pictures/mars-min.png" alt="mars picture" />
          </a>
        </div>
        <div class="box item-c animate__animated animate__fadeInUpBig">
          <a href="https://oh-coronawebsite.netlify.app/index1.1" target="_blank">
            <img class="image" src="./../pictures/corona.png" alt="website picture" />
          </a>
        </div>
        <div class="box item-d animate__animated animate__fadeInRightBig">
          <a href="https://oh-snake.netlify.app/snake.html" target="_blank">
            <img class="image" src="./../pictures/snake.png" alt="snake picture" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#navbar2 {
  padding: 1rem 0;
  background-color: $light2;
  a {
    color: $rose;
    font-size: $font-large;
    margin: 0 2rem;
  }
  a:hover {
    filter: brightness(80%);
  }
}
.image {
  max-width: 100%;
}
.item-a {
  background-color: $light2;
  grid-area: calc;
  display: flex;
  align-items: center;
}
.item-b {
  grid-area: mars;
}
.item-c {
  grid-area: corona;
  max-height: 178px;
}
.item-d {
  grid-area: snake;
}
#container {
  height: 30rem;
  display: grid;
  justify-content: center;
  grid-gap: 2rem;
  grid-template-columns: 15rem 15rem 15rem;
  grid-template-rows: auto;
  grid-template-areas:
    "calc mars mars"
    "calc mars mars"
    "calc corona snake"
    "calc corona snake";
}
.box {
  border-radius: 10px;
  overflow: hidden;
  transition: 0.2s all;
}
#container:hover {
  .box {
    filter: blur(3px);
    opacity: 0.5;
    transform: scale(0.98);
    box-shadow: none;
  }
}
#container:hover {
  .box:hover {
    transform: scale(1);
    filter: blur(0px);
    opacity: 1;
    box-shadow: 0 8px 20px 0px rgba(0, 0, 0, 0.500);
  }
}
@media (max-width: 800px) {
  #container {
    display: block;
  }
  .item-a {
    justify-content: center;
    img {
      height: 30rem;
      width: auto;
    }
  }
  .item-c {
    grid-area: corona;
    max-height: none;
  }
  .box {
    margin-bottom: 1rem;
  }
}
</style>