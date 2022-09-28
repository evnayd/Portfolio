<template>
  <div class="contact">
    <h2>Let's Chat:</h2>
    <div class="contact-block">
      <div class="contact-text">
        <p>
          You can reach me here. Feel free to write in English, Russian or
          Serbian.
        </p>
      </div>
      <ul class="contact-list">
        <li class="contact-item">
          <a href="https://github.com/evnayd">Github</a>
        </li>
        <li class="contact-item">
          <a href="https://www.linkedin.com/in/evgeniya-naydenisheva/"
            >LinkedIn</a
          >
        </li>
        <li class="contact-item">
          <a href="https://www.facebook.com/jane.tikhonova/">Facebook</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-size: 40px;
  font-weight: 600;
}

p {
  font-size: 26px;
  line-height: 40px;
  text-align: left;
}

.contact {
  padding: 20px;
  text-align: center;
  position: relative;
}

.contact-block {
  background-color: #fff;
  padding: 15px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.contact-item {
  margin-bottom: 10px;
}

a {
  color: #fff;
  display: inline-block;
  padding: 10px;
  background-color: #6b9abe;
  width: 100%;
  cursor: pointer;
}

a:hover {
  background-color: #266392;
}

/*.contact:after {
  position: absolute;
  content: "";
  background-image: url("../img/orange_pic.svg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 300px;
  height: 600px;
  bottom: 0;
  left: 0;
  opacity: 0.5;
  z-index: -10;
  transform: rotate(180deg);
}*/


@media (min-width: 1024px) {
  p {
    font-size: 24px;
  }
  .contact-block {
    padding: 40px;
  }
}
</style>
