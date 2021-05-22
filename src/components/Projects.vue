<template>
  <div class="wrapper" :projects="projects">
    <project
      v-for="project in projects"
      :key="project.id"
      v-bind:project="project"
    ></project>
  </div>
</template>

<script>
import Project from "../components/Project.vue";
export default {
  components: {
    Project,
  },

  data() {
    return {
      projects: [
        {
          id: "01",
          name: "Frontend developer portfolio ",
          tech: "CSS, Vue.js, Vue CLI, Vue Router",
          img: require("../img/portfolio.jpg"),
        },
        {
          id: "02",
          name: "Recipe app",
          tech: "HTML, CSS, Vue.js, Vue CLI, fetch API",
          img: require("../img/recipes_screen.jpg"),
          github: "https://github.com/evnayd/Recipesapp/tree/master",
          site: "https://evnayd.github.io/Recipesapp/",
        },
        {
          id: "03",
          name: "Films & cartoons app",
          tech: "HTML, SCSS, JavaScript",
          img: require("../img/films_screen.jpg"),
          github: "https://github.com/evnayd/familyfilms",
          site: "https://evnayd.github.io/familyfilms/",
        },
        {
          id: "04",
          name: "Booking the apartment app",
          tech: "HTML, CSS, JavaScript, AJAX",
          img: require("../img/keksobooking_screen.jpg"),
          github: "https://github.com/evnayd/1033021-keksobooking-20",
          site: "https://github.com/evnayd",
        },
        {
          id: "05",
          name: "Password validation component",
          tech: "Svelte, Tailwind CSS",
          img: require("../img/svelte_screen.jpg"),
          github: "https://github.com/evnayd/Svelte-study",
          site: "https://github.com/evnayd",
        },
        {
          id: "06",
          name: "Сatalog of sports nutrition for cats ",
          tech: "HTML, SCSS, JavaScript",
          img: require("../img/cat_screen.jpg"),
          github: "https://github.com/evnayd/Energy",
          site: "https://evnayd.github.io/Energy/",
        },
        {
          id: "07",
          name: "To-do list",
          tech: "HTML, CSS, CSS-animation, JavaScript",
          img: require("../img/todo_screen.jpg"),
          github: "https://github.com/evnayd/To-do_list",
          site: "https://evnayd.github.io/To-do_list/",
        },
      ],
    };
  },
};
</script>

<style scoped>
.wrapper {
  padding: 20px;
}

@media (min-width: 1024px) {
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 15px;
  }
}
</style>
