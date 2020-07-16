<template>
  <div id="aboutWrapper">
    <navbar></navbar>
    <div class="centered-container">
      <div class="custom-container">
        <div id="aboutMeText" class="jumbotron">
          <h4 class="animate__animated">Nice to see you here !</h4>
          <p>I create responsive web applications and websites.</p>
        </div>
        <div id="youtube">
          <iframe
            width="395"
            height="222"
            src="https://www.youtube.com/embed/wwc6Gku-uBA"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#aboutWrapper {
  background-color: $light;
}
#aboutMeText {
  position: relative;
  z-index: 0;
  border-radius: 30px;
  background-color: $light2;
}
#youtube {
  position: absolute;
  z-index: 1;
  top: 10rem;
  right: -10rem;
  overflow: hidden;
  iframe {
    border-radius: 30px;
    overflow: hidden;
  }
}
#nav-text-collapse {
  justify-content: center;
}
@media (max-width: 575px) {
  #youtube {
  position: initial;
  text-align: center;
  
  iframe {
    width: calc(100% - 4rem);
  }
}
#aboutMeText {
  margin: 2REM;
}
}
</style>