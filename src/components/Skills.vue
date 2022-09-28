<template>
  <div class="skills">
    <div class="skills-text">
      <h2>My skills:</h2>
      <ul>
        <li>
          HTML5. I try to write valid and semantic mark-up and prefer to use BEM
          methodology.
        </li>
        <li>
          CSS3. I really enjoy creating layouts. I also use SCSS,
          Sass, Less and Talwind CSS.
        </li>
        <li>
          JavaScript, Vue.js. On my current position I work with Vue.
           In my spare time I study React.
        </li>
        <li>Gulp, Webpack.</li>
        <li>Git - for the version control.</li>
        <li>English, Russian and Serbian - for the communication.</li>
      </ul>
      <p></p>
    </div>
    <div class="skills-img">
      <img alt="sreenshot of the site" src="../img/book.jpg" />
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-size: 26px;
}

ul {
  z-index: 230;
  padding-left: 25px;
  padding-bottom: 25px;
}

li {
  font-size: 24px;
  line-height: 30px;
  list-style: unset;
  margin-bottom: 15px;
}

.skills {
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
}

/*.skills:after {
  position: absolute;
  content: '';
  background-image: url('../img/wave2.svg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 300px;
  left: 0px;
  bottom: -30px;
  z-index: -10;
}*/

.skills-img {
  width: 100%;
}

.skills-img img {
  border: 20px solid #f7ca4a;
  width: 100%;
  max-width: 450px;
}

@media (min-width: 1024px) {
  ul {
    padding-bottom: 0;
  }
  h2 {
    font-size: 40px;
  }

  li {
    font-size: 24px;
    line-height: 40px;
    margin-bottom: 20px;
  }
  .skills {
    display: flex;
    padding-top: 60px;
    padding-left: 50px;
    padding-right: 0;
    padding-bottom: 70px;
  }

  .skills-img {
    width: 50%;
    position: relative;
  }

  .skills-img img {
    border: 20px solid #f7ca4a;
    position: absolute;
    width: 300px;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    z-index: 21;
  }

  .skills-text {
    width: 50%;
  }
}
</style>
