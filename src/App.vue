<template>
  <Navigation />
  <router-view></router-view>
  <PageFooter />
</template>

<script lang="ts">
import { onMounted } from "vue";
import Navigation from "@/components/Navigation.vue";
import PageFooter from "@/components/PageFooter.vue";

export default {
  name: "App",
  components: {
    Navigation,
    PageFooter,
  },
  setup() {
    onMounted(() => {
      document.title = "Kim Restaurant";
    });

    return {};
  },
};
</script>

<style scoped></style>
