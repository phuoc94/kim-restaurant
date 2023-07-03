<template>
  <Navigation />
  <router-view />
  <PageFooter />
</template>

<script lang="ts">
import Navigation from "@/components/Navigation.vue";
import PageFooter from "@/components/PageFooter.vue";

export default {
  name: "App",
  components: {
    Navigation,
    PageFooter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
