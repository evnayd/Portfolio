<template>
  <button type="button" v-on:click="moveOnTop"></button>
</template>

<script>
export default {
  methods: {
    moveOnTop() {
      this.$emit("top");
    },
  },
};
</script>

<style scoped>
button {
  position: fixed;
  bottom: 5px;
  right: 2px;
  border: none;
  outline: none;
  cursor: pointer;
  background-image: url("../img/button.svg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  height: 50px;
  width: 50px;
  transform: rotateY(0deg) rotate(-90deg);
  opacity: 0.7;
  background-color: #6b9abe;
  border-radius: 4px;
  z-index: 600;
  transition: 0.3s linear;
}

button:hover {
  opacity: 1;
}

@media (min-width: 1024px) {
  button {
    bottom: 15px;
    left: 1px;
  }
}
</style>
