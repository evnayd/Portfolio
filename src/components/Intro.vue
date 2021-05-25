<template>
  <div class="intro">
    <div>
      <h2>Hello!</h2>
      <p>
        My name is Evgeniya. I am a self-taught front-end developer. Welcome to
        my portfolio site! Here I would like to tell a little about myself, and
        show my projects.
      </p>
    </div>
    <img alt="portrait" src="../img/main-min.jpg" />
  </div>
</template>

<style scoped>
.intro {
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
}

h2 {
  font-size: 24px;
}

img {
  width: 100%;
  height: auto;
  border: 20px solid #f7ca4a;
}

p {
  font-size: 24px;
  line-height: 30px;
  width: 100%;
  z-index: 230;
}

.intro:before {
  position: absolute;
  content: "";
  background-image: url("../img/wave2.svg");
  background-repeat: no-repeat;
  width: 100%;
  height: 320px;
  left: 0px;
  bottom: -4px;
  z-index: -10;
  background-size: cover;
}

@media (min-width: 1024px) {
  .intro {
    display: flex;
    justify-content: space-between;
    padding-left: 50px;
    padding-right: 0;
    padding-top: 15px;
  }

  h2 {
    font-size: 40px;
  }

  p {
    font-size: 24px;
    line-height: 40px;
    max-width: 400px;
    z-index: 230;
    padding-right: 5px;
  }

  img {
    width: 60%;
    height: auto;
    border: 20px solid #f7ca4a;
  }
}
</style>
