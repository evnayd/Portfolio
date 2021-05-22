<template>
  <header>
    <nav>
      <div class="wrapper">
        <button
          class="nav-toggle"
          aria-label="Open the menu"
          type="button"
          v-on:click="openTheNav"
          :class="{ 'nav-toggle--close': isNavVisible }"
        ></button>
      </div>
      <ul class="menu" :class="{ 'class-open': isNavVisible }">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/contacts">Contacts</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isNavVisible: false,
    };
  },
  methods: {
    openTheNav() {
      this.isNavVisible = !this.isNavVisible;
    },
  },
};
</script>
<style scoped>
.menu {
  display: none;
}

ul {
  margin: auto;
  transition: all 0.3s;
}

.class-open {
  display: block;
}

li {
  margin-bottom: 1px;
}

a {
  text-decoration: none;
  color: #4a4b4f;
  font-weight: 600;
  font-size: 30px;
  padding: 25px;
  display: inline-block;
  width: 100%;
  position: relative;
}

a:after {
  display: block;
  position: absolute;
  left: 0;
  bottom: 5px;
  width: 0;
  height: 7px;
  background-color: #f7ca4a;
  content: "";
  transition: width 0.3s ease-out;
}

a:hover:after,
a:focus:after {
  width: 100%;
}

.wrapper {
  padding: 25px;
}

.nav-toggle {
  outline: none;
  border: none;
  width: 24px;
  height: 2px;
  position: relative;
  transition: all 0.3s;
  background-color: #888;
  border-radius: 2px;
}

.nav-toggle::before {
  position: absolute;
  content: "";
  width: 24px;
  height: 2px;
  transition: all 0.3s;
  background-color: #888;
  border-radius: 2px;
  top: 5px;
  left: 0;
}

.nav-toggle::after {
  position: absolute;
  content: "";
  width: 24px;
  height: 2px;
  transition: all 0.3s;
  background-color: #888;
  border-radius: 2px;
  bottom: 5px;
  left: 0;
}

.nav-toggle--close {
  background-color: transparent;
}

.nav-toggle--close::before {
  transform: rotate(45deg);
  top: 0;
}

.nav-toggle--close::after {
  transform: rotate(-45deg);
  top: 0;
}

@media (min-width: 1024px) {
  .menu {
    display: flex;
    justify-content: space-between;
  }
  .nav-toggle {
    display: none;
  }

  nav {
    width: 50%;
    margin-left: 50%;
  }

  header {
    width: 100%;
    padding: 5px;
    padding-right: 50px;
    padding-left: 50px;
    background-color: #f9ede5;
    background-color: transparent;
    display: flex;
  }

  a {
    background-color: transparent;
    color: #4a4b4f;
    outline: none;
    font-weight: 600;
    font-size: 22px;
    padding-left: 5px;
    padding-right: 5px;
  }

  a:after {
    bottom: 15px;
  }

  .wrapper {
    display: none;
  }
}
</style>
