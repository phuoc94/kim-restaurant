<template>
  <div class="home">
    <FrameTwo />
    <FrameOne />
    <FrameThree />
    <FrameFour />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import FrameFour from "@/components/FrameFour.vue";
import FrameOne from "@/components/FrameOne.vue";
import FrameThree from "@/components/FrameThree.vue";
import FrameTwo from "@/components/FrameTwo.vue";

export default defineComponent({
  name: "HomeView",
  components: { FrameOne, FrameTwo, FrameThree, FrameFour },
});
</script>
