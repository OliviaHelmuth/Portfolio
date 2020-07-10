<template>
    <div id="navbar">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" href="./">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./contact">Contact</a>
        </li>
      </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
$light: #ebf3ea;
$light2: #ffffff;
$green: #9eb294;
$rose: #e38b9c;
* {
  font-family: "Raleway", sans-serif;
  box-sizing: border-box;
}
#navbar {
  padding: 1rem 0;
  background-color: $light;
  a {
    color: $rose;
    font-size: 1.8rem;
    margin: 0 2rem;
  }
}

</style>