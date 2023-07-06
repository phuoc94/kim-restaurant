<template>
  <div class="slide">
    <transition name="slide" v-if="playAnimation">
      <slot />
    </transition>
    <slot v-else />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["animation"],
  setup(props) {
    const playAnimation = ref(props.animation);

    return { playAnimation };
  },
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.7s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
}
</style>
