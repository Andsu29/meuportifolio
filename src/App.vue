<template>
  <div id="app">
    <header-view />
    <transition mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import HeaderView from "./views/HeaderView.vue";
export default {
  components: {
    HeaderView,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  background-color: #10101a;
}
body,
a,
p,
h1,
h2,
ul,
li {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  color: #f9f9f9;
}
img {
  display: block;
  max-width: 100%;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
