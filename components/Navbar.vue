<template>
  <div id="navbar">
    <div>
      <b-navbar toggleable="sm" type="light">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav align="center">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/">Home</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/projects">Projects</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/about">About Me</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/contact">Contact</nuxt-link>
            </li>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#navbar {
  padding: 1rem 0;
  background-color: $light;
  a {
    color: $rose;
    font-size: $font-large;
    margin: 0 2rem;
  }
  a:hover {
    filter: brightness(80%);
  }
}
@media (max-width: 719px) {
  #navbar ul {
    text-align: end;
  }
}
#nav-text-collapse {
  justify-content: center;
}
</style>