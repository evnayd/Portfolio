<template>
  <div class="skills">
    <div class="skills-text">
      <h2>My skills:</h2>
      <ul>
        <li><p class="tech">JavaScript ES6.</p> </li>
        <li><b>Vue.js.</b> The core framework I use on my current position.
          I build and implement new components and work with legacy code.</li>
        <li><b>React.js.</b> Framework I'm currently studying. I built few pet projects with React.js</li>
        <li>
          <b>HTML5. </b> Valid and semantic mark-up and BEM methodology.
        </li>
        <li>
          <b>CSS3. </b>
          I really enjoy creating layouts. I also use SCSS,
          Sass, Less and Talwind CSS.
        </li>
        <li> <b>Jekyll.</b></li>
        <li><b>No code technologies.</b> I created few websites with Webflow.</li>
        <li><b>Gulp, Webpack.</b></li>
        <li><b>Git.</b></li>
        <li><b>Languages: Russian (native), English (fluent), Serbian (fluent).</b></li>
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

.tech {
 font-weight: 900;
}

.skills {
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
}


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

  
.skills:after {
  position: absolute;
  content: '';
  background-image: url('../img/wave2.svg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 400px;
  left: 0px;
  bottom: 0px;
  z-index: -10;
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
