<template>
  <div class="home">
    <FrameOne />
    <FrameTwo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FrameOne from "@/components/FrameOne.vue";
import FrameTwo from "@/components/FrameTwo.vue";

export default defineComponent({
  name: "HomeView",
  components: { FrameOne, FrameTwo },
});
</script>
