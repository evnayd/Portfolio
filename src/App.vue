<template>
  <navigation></navigation>

  <main>
    <router-view></router-view>
    <top-button @top="moveTop" v-show="isTopButtonVisible"></top-button>
  </main>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import TopButton from "./components/TopButton.vue";

export default {
  components: {
    Navigation,
    TopButton,
  },

  data() {
    return {
      isTopButtonVisible: false,
    };
  },
  methods: {
    moveTop() {
      document.body.scrollTop = 0; //for safari
      document.documentElement.scrollTop = 0;
    },
    scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        this.isTopButtonVisible = true;
      } else {
        this.isTopButtonVisible = false;
      }
    },
  },

  mounted() {
    window.addEventListener("scroll", this.scrollFunction);
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Nunito Sans", "Helvetica", sans-serif;
}

body {
  margin: 0;
  padding: 0;
  color: #4a4b4f;
  background-color: #f9ede5;
}

main {
  position: relative;
}

ul {
  padding: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

.container {
  margin: 0 auto;
  max-width: 1400px;
  padding-right: 20px;
  padding-left: 20px;
  text-align: center;
  padding-top: 40px;
  height: 100vh;
}
</style>
