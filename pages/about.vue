<template>
  <div id="aboutWrapper">
    <navbar></navbar>
    <div class="centered-container" id="about-me-height">
      <div class="custom-container2">
        <div
          id="aboutMeText"
          class="jumbotron animate__animated animate__fadeInTopLeft"
        >
          <h4>Nice to see you here !</h4>
          <hr class="my-4" />
          <p>
            I'm a Web Developer based in Berlin and I create Web Applications
            and Websites. Before I started programming I worked for Germany's
            biggest home networking company AVM in Tech Support and I
            represented the company at their entrance.
            <br />Technologies I use for the frontend are HTML, CSS(SASS), Git,
            JavaScript and as frameworks I use VueJS and NuxtJS and a variety of
            CSS franeworks. As for the backend I use Python, Django and Django
            REST framework.
            <br />
          </p>
        </div>
        <div id="youtube" class="animate__animated animate__fadeInBottomRight">
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
  max-height: 700px;
  padding-bottom: 10rem;
}
#aboutWrapper {
  background-color: $light;
}
#aboutMeText {
  position: relative;
  z-index: 0;
  border-radius: 30px;
  background-color: $light2;
  padding: 2rem;
}
#youtube {
  position: absolute;
  z-index: 1;
  top: 18rem;
  right: -11rem;
  overflow: hidden;
  iframe {
    background-color: $green;
    border-radius: 30px;
    overflow: hidden;
  }
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
@media (max-width: 830px) {
  #about-me-height {
    height: 100%;
    padding-bottom: 5rem;
  }
}
</style>
