<template>
  <div class="bg-orange-50 pb-24">
    <div class="container">
      <h1 class="h1 pb-14 pt-16 text-center font-serif font-bold text-black">
        Sneak Peak of Our Delicious Offerings
      </h1>
      <div class="flex justify-center px-4">
        <div class="grid grid-cols-[auto_auto_auto] gap-2">
          <div
            class="col-span-2 h-full cursor-pointer"
            @click="toggleLightbox(grid1)"
          >
            <img class="h-full w-full object-cover" :src="grid1" />
          </div>
          <div
            class="row-span-2 h-full cursor-pointer"
            @click="toggleLightbox(grid5)"
          >
            <img class="h-full w-full object-cover" :src="grid5" />
          </div>
          <div
            class="col-span-2 h-full cursor-pointer"
            @click="toggleLightbox(grid2)"
          >
            <img class="h-full w-full object-cover" :src="grid2" />
          </div>
          <div class="h-full" @click="toggleLightbox(grid3)">
            <img
              class="h-full w-full cursor-pointer object-cover"
              :src="grid3"
            />
          </div>
          <div class="col-span-2 h-full" @click="toggleLightbox(grid4)">
            <img
              class="h-full w-full cursor-pointer object-cover"
              :src="grid4"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <FrameFour />
  <Lightbox
    v-if="showLightbox"
    :selectedImage="selectedImage"
    @close="toggleLightbox"
  />
</template>

<script>
import { reactive, toRefs, onUnmounted } from "vue";
import FrameFour from "@/components/FrameFour.vue";
import Lightbox from "@/components/Lightbox.vue";
import grid1 from "@/assets/grid1.webp";
import grid2 from "@/assets/grid2.png";
import grid3 from "@/assets/grid3.png";
import grid4 from "@/assets/grid4.png";
import grid5 from "@/assets/grid5.png";

export default {
  components: { FrameFour, Lightbox },
  setup() {
    const state = reactive({
      showLightbox: false,
      selectedImage: null,
    });

    function toggleLightbox(imageSrc = null) {
      state.selectedImage = imageSrc;
      state.showLightbox = !!imageSrc;
      document.body.style.overflow = state.showLightbox ? "hidden" : "";
    }

    onUnmounted(() => {
      document.body.style.overflow = "";
    });

    return {
      ...toRefs(state),
      toggleLightbox,
      grid1,
      grid2,
      grid3,
      grid4,
      grid5,
    };
  },
};
</script>
