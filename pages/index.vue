<template>
  <div>
    <navbar></navbar>
    <div id="main" class="centered-container">
      <div class="container custom-container">
        <div class="jumbotron my-content animate__animated animate__fadeInLeftBig">
          <h1 class="display-6 animate__animated animate__fadeInLeftBig">Hello, world!</h1>
          <hr class="my-4" />
          <p class="animate__animated animate__fadeInLeftBig">I'm Olivia a frontend developer and tech enthusiast</p>
        </div>
        <div class="jumbotron custom-pink animate__animated animate__fadeInRightBig"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.my-content {
  position: relative;
  background-color: white;
  border-radius: 30px;
  z-index: 1;
}
#main {
  background-color: $light;
  .custom-pink {
    background-color: $rose;
    height: calc(100% + 100px);
    width: 20rem;
    border-radius: 60px;
    position: absolute;
    margin-left: 0;
    top: -107px;
    right: 3rem;
    z-index: 0;
  }
  p {
    font-size: 1.1rem;
  }
}
.custom-container {
  position: relative;
  padding: 0 9rem;
  max-width: 930px;
}
@media (max-width: 575px) {
  .custom-container {
    padding: 0 2rem;
  }
  #main .custom-pink {
    right: 3rem;
  }
}
</style>
