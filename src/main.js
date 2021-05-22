import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import App from "./App.vue";
import Home from "./components/Home.vue";
import Contacts from "./components/Contacts.vue";
import Projects from "./components/Projects.vue";

const router = createRouter({
  base: "/portfolio/",
  mode: "hash",
  history: createWebHashHistory("/portfolio/"),
  routes: [
    {
      path: "/contacts",
      component: Contacts,
    },
    {
      path: "/projects",
      component: Projects,
      props: true,
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
