<template>
  <div>
    <navbar></navbar>
    <div id="main">
      <div class="jumbotron">
        <h1 class="display-5">Hello, world!</h1>
        <p>Former Tech Support and now web developer</p>
        <hr class="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
      </div>
      <div id="main2">
        <div class="jumbotron"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
$light: #ebf3ea;
$light2: #ffffff;
$green: #9eb294;
$rose: #e38b9c;
#main {
  background-color: $light;
  display: flex;
  align-items: center;
  height: 90vh;
  .jumbotron {
    margin-left: 25rem;
    background-color: white;
    border-radius: 30px;
    z-index: 1;
  }
  #main2 {
    position: relative;
    .jumbotron {
      background-color: $rose;
      height: 28rem;
      width: 20rem;
      border-radius: 60px;
      position: absolute;
      margin-left: 0;
      bottom: -13rem;
      right: -4rem;
      z-index: 0;
    }
  }
}
</style>
