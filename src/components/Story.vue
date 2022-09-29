<template>
  <div class="story">
    <div class="story-text">
      <h2>My story:</h2>
      <p>
        My developer's story began in 2019, the moment I opened the code editor
        for the first time. 
        In August 2021 I found my first job as a frontend-developer. 
        Here I got the opportunity to work with other front-end and back-end developers, to build few websites from scratch, to work on big project, to implement new components, and to learn a lot of new things.
        <br>I like front-end because it's the mix of design and technologies. 
      </p>
      <p>
      </p>
    </div>
    <div class="story-img">
      <img alt="sreenshot of the si te" src="../img/laptop.jpg" />
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
