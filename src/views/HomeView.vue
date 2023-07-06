<template>
  <div class="home">
    <FrameOne />
    <FrameTwo />
    <FrameThree />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FrameOne from "@/components/FrameOne.vue";
import FrameTwo from "@/components/FrameTwo.vue";
import FrameThree from "@/components/FrameThree.vue";

export default defineComponent({
  name: "HomeView",
  components: { FrameOne, FrameTwo, FrameThree },
});
</script>
