<template>
  <div>
    <navbar id="navbar2"></navbar>
    <div class="container text-center centered-container" id="contactContainer">
      <div class="animate__animated animate__rollIn">
        <img id="myself" src="../pictures/me2-min2.jpg" alt="a picture of myself" />
      </div>
      <div id="link-container">
        <a href="https://www.linkedin.com/in/olivia-h-a184731a3/" target="_blank">
          <font-awesome-icon :icon="['fab', 'linkedin-in']" />
        </a>
        <a href="https://github.com/OliviaHelmuth" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a href="mailto:Olivia.Helmuth@pm.me">
          <font-awesome-icon :icon="['fa', 'envelope']" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">

#myself {
  background-color: $green;
  height: 15rem;
  border-radius: 50%;
  border: solid 2px $green;
  margin: 2rem;
}
#link-container {
  margin-bottom: 53px;
  a {
    margin: 0 2rem;
    font-size: $font-xlarge;
    color: $green;
  }
  a:hover {
    filter: brightness(80%);
  }
}
#contactContainer {
  flex-direction: column;
}
</style>