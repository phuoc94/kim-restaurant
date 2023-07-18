<template>
  <div class="bg-orange-50 pb-24">
    <div class="container mx-auto">
      <h1 class="pb-14 pt-16 text-center">
        Sneak Peak of Our Delicious Offerings
      </h1>
      <div class="flex justify-center px-4">
        <div class="grid grid-cols-[auto_auto_auto] gap-2">
          <div class="col-span-2 h-full">
            <img class="h-full w-full object-cover" src="@/assets/grid1.png" />
          </div>
          <div class="row-span-2 h-full">
            <img class="h-full w-full object-cover" src="@/assets/grid5.png" />
          </div>

          <div class="col-span-2 h-full">
            <img class="h-full w-full object-cover" src="@/assets/grid2.png" />
          </div>

          <div class="h-full">
            <img class="h-full w-full object-cover" src="@/assets/grid3.png" />
          </div>
          <div class="col-span-2 h-full">
            <img class="h-full w-full object-cover" src="@/assets/grid4.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <FrameFour />
</template>

<script lang="ts">
import FrameFour from "@/components/FrameFour.vue";

export default {
  components: { FrameFour },
};
</script>

<style scoped>
h1 {
  color: #000;

  /* H1 */
  font-family: Times New Roman;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 65px;
}
</style>
