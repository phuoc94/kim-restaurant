<template>
  <Navigation />
  <transition name="fade">
    <router-view />
  </transition>
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
