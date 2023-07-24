<template>
  <div :projects="projects" class="container">
    <h1>Here you can see some of my projects:</h1>
    <div class="wrapper">
      <project
        v-for="project in projects"
        :key="project.id"
        v-bind:project="project"
      ></project>
    </div>
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
          name: "Tourist Organization of Zemun, Belgrade",
          tech: "HTML, CSS, TailwindCSS, JavaScript, Jekyll, Tina CMS, Vercel",
          img: require("../img/zemun.jpg"),
          site: "https://www.turistickaorganizacijazemun.rs",
          github: "https://github.com/tkzzemun/zemuncenter",
        },
        {
          name: "Omnia Bistro & Bar in Australia",
          tech: "HTML, CSS, TailwindCSS, JavaScript, Jekyll, Tina CMS, Vercel",
          img: require("../img/omnia.jpg"),
          site: "https://www.omniabistro.com.au",
          github: "https://github.com/ultimatemovers/omnia",
        },
        {
          name: "Event Center in Australia",
          tech: "HTML, CSS, TailwindCSS, JavaScript, Jekyll",
          img: require("../img/eventcenter.jpg"),
          site: "https://www.lkhevents.com.au/",
        },
        {
          name: "Long Distance Moving Soft",
          tech: "CSS, TailwindCSS, Vue.js, Laravel on backend",
          img: require("../img/longdistance.jpg"),
        },
        {
          name: "Ecommerce project for studying purposes",
          tech: "CSS, TailwindCSS, React.js",
          img: require("../img/reactshop.jpg"),
          site: "https://6332f2cd83d7ed37cb895fc9--clinquant-boba-fc5a2e.netlify.app",
          github: "https://github.com/evnayd/React-shop-app",
        },
        {
          id: "04",
          name: "Frontend developer portfolio ",
          tech: "CSS, Vue.js, Vue CLI, Vue Router",
          img: require("../img/portfolio.jpg"),
          site: "https://evnayd.github.io/portfolio",
          github: "https://github.com/evnayd/portfolio",
        },
        {
          name: "Recipe app",
          tech: "HTML, CSS, Vue.js, Vue CLI, fetch API",
          img: require("../img/recipes_screen.jpg"),
          github: "https://github.com/evnayd/Recipesapp",
          site: "https://evnayd.github.io/Recipesapp/",
        },
        {
          name: "Films & cartoons app",
          tech: "HTML, SCSS, JavaScript",
          img: require("../img/films_screen.jpg"),
          github: "https://github.com/evnayd/familyfilms",
          site: "https://evnayd.github.io/familyfilms/",
        },
        {
          name: "Booking the apartment app",
          tech: "HTML, CSS, JavaScript, AJAX",
          img: require("../img/keksobooking_screen.jpg"),
          github: "https://github.com/evnayd/1033021-keksobooking-20",
          site: "https://github.com/evnayd",
        },
        {
          name: "Сatalog of sports nutrition for cats ",
          tech: "HTML, SCSS, JavaScript",
          img: require("../img/cat_screen.jpg"),
          github: "https://github.com/evnayd/Energy",
          site: "https://evnayd.github.io/Energy/",
        },
        {
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
.container {
  padding: 20px;
}

@media (min-width: 1024px) {
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 80px;
  }
}
</style>
