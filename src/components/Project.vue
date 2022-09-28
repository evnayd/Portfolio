<template>
  <div class="project-item">
    <div class="project-img">
      <img :src="project.img" alt="sreenshot of the site"  />
    </div>
    <div class="project-info">
      <h3 class="project-details project-name">{{ project.name }}</h3>
      <p class="project-details project-tech">
        {{ project.tech }}
      </p>
    </div>
    <a class="project-btn " :href="project.site">See the site</a>
    <a class="project-btn" :href="project.github">See the code</a>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
    name: String,
    tech: String,
    id: Number,
    img: String,
    site: String,
    github: String,
  },
};
</script>

<style scoped>
.project-item {
  padding: 20px;
  padding-bottom: 40px;
  background-color: #fff;
  color: #4a4b4f;
  width: 100%;
  text-align: center;
  margin-bottom: 25px;
  max-width: 500px;
  position: relative;
}

.project-details {
  position: absolute;
  background-color: #6b9abe;
  padding: 10px;
  z-index: 200;
  text-align: left;
  transition: 0.5s linear;
  color: #fff;
}

.project-name {
  top: 15px;
  left: 0;
  font-size: 16px;
}

.project-tech {
  top: 90px;
  left: 0px;
  margin: auto;
  font-size: 14px;
}

.project-img img {
  width: 100%;
  height: auto;
  margin-left: 0;
  opacity: 0.3;
  transition: 0.3s linear;
}

.project-btn {
  background-color: #6b9abe;
  color: #fff;
  padding: 7px;
  margin: 5px;
  text-decoration: none;
  display: inline-block;
  width: 200px;
}

.project-btn:hover {
  background-color: #266392;
}

@media (min-width: 798px) {
  .project-img img {
    width: 100%;
    min-height: 420px;
  }
  .project-item {
    width: 500px;
    padding: 40px;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 0;
    margin-bottom: 100px;
  }

  .project-item:hover .project-img img {
    opacity: 1;
  }

  .project-item:hover .project-name {
    display: none;
  }

  .project-item:hover .project-tech {
    display: none;
  }

  .project-details {
    left: auto;
    right: -30px;
  }

  .project-name {
    font-size: 24px;
  }

  .project-tech {
    font-size: 20px;
    top: 100px;
  }
}
</style>
