<template>
  <div id="aboutWrapper">
    <navbar></navbar>
    <div class="centered-container">
      <div class="custom-container2">
        <div id="aboutMeText" class="jumbotron">
          <h4 class="animate__animated">Nice to see you here !</h4>
          <p>
            I'm a web developer based in Berlin and I create web applications and websites.
            Before I started programming I worked as a tech supporter at AVM, you can also take
            a look at me in the video below.
            <br />Technologies I use are HTML, CSS(SASS), Git and JavaScript and as frameworks
            I use Bootstrap, VueJS and NuxtJS.
          </p>
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
.custom-container2 {
  position: relative;
  padding: 0 4rem;
  max-width: 700px;
}
#aboutWrapper {
  background-color: $light;
  padding-bottom: 5rem;
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
  top: 14rem;
  right: -11rem;
  overflow: hidden;
  iframe {
    border-radius: 30px;
    overflow: hidden;
  }
}
#nav-text-collapse {
  justify-content: center;
}
@media (max-width: 1080px) {
  #youtube {
    position: initial;
    text-align: center;
    iframe {
      width: calc(100% - 1rem);
    }
  }
  #aboutMeText {
    margin: 0.6rem;
    margin-bottom: 1rem;
  }
  .custom-container2 {
    padding: 0;
  }
  #aboutWrapper {
    padding-bottom: 0;
  }
}
</style>