<template>
  <div class="story">
    <div class="story-text">
      <h2>My story:</h2>
      <p>
        My developer story began in 2019. That was when I first opened a code
        editor. Until that moment, my life had nothing to do with IT, and even
        in my wildest dreams I could not imagine myself as a developer. But
        sometimes life comes with surprises. <br />Before my studying began, I
        had a lot of doubts. Can a woman be a programmer? Can a person become a
        programmer not being a brilliant mathematician? Is it possible to become
        a front-end developer after 30? I read many articles on this topic and
        they all answered my questions: yes, yes and yes. I want to thank all
        the authors of these articles. They gave me strength initially. Now I
        know from experience that everything is possible if you work hard and
        don't give up.
      </p>
    </div>
    <div class="story-img">
      <img alt="sreenshot of the site" src="../img/laptop.jpg" />
    </div>
  </div>
</template>

<style scoped>
.story {
  background-color: #fff;
  position: relative;
  padding: 20px;
  font-size: 24px;
  line-height: 30px;
  z-index: 20;
}

.story:before {
  position: absolute;
  content: '';
  background-image: url('../img/wave1.svg');
  background-repeat: no-repeat;
  width: 100%;
  height: 250px;
  left: 0px;
  bottom: -4px;
  z-index: 20;
  background-size: cover;
}

.story:after {
  position: absolute;
  content: '';
  background-image: url('../img/pink_pic.svg');
  background-repeat: no-repeat;
  width: 150px;
  height: 250px;
  left: 0px;
  top: 170px;
  background-size: cover;
  transform: rotate(180deg);
  z-index: 0;
  opacity: 50%;
}

h2 {
  font-size: 26px;
}

p {
  font-size: 24px;
  line-height: 30px;
  z-index: 280;
  position: relative;
  margin-bottom: 30px;
}

.story-img img {
  border: 20px solid #f7ca4a;
  width: 100%;
  max-width: 450px;
}

@media (min-width: 1024px) {
  p {
    font-size: 24px;
    line-height: 40px;
  }

  h2 {
    font-size: 40px;
  }
  .story {
    display: flex;
    padding-top: 60px;
    flex-direction: row-reverse;
    padding-right: 50px;
    padding-left: 0;
  }

  .story-img {
    width: 50%;
    position: relative;
  }

  .story-img img {
    border: 20px solid #f7ca4a;
    position: absolute;
    width: 300px;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    z-index: 21;
  }

  .story-text {
    width: 50%;
  }

  .story:after {
    width: 200px;
    height: 270px;
    left: 0;
    top: -15px;
  }
}
</style>
