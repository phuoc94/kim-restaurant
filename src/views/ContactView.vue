<template>
  <div class="bg flex h-screen items-center justify-center px-4">
    <div
      class="basis-full divide-y-4 divide-dashed text-center font-inter text-white md:basis-10/12 lg:basis-8/12 xl:basis-1/2"
    >
      <div class="pb-12">
        <h1 class="h1 font-serif font-bold">Open Time</h1>
      </div>
      <div class="flex justify-between py-12 text-lg">
        <div>
          <p class="font-bold">Ma</p>
          <p>11:00 - 14:30</p>
        </div>
        <div>
          <p class="font-bold">Ti - Pe</p>
          <p>11:00 - 21:00</p>
        </div>
        <div>
          <p class="font-bold">La</p>
          <p>12:00 - 21:00</p>
        </div>
        <div>
          <p class="font-bold">Su</p>
          <p>12:00 - 20:30</p>
        </div>
      </div>
      <div class="flex pt-6 text-left text-lg">
        <div class="basis-1/2">
          <p>We can be contacted via</p>
          <p>email</p>
          <p>or telephone on</p>
        </div>
        <div class="basis-1/2"><p>We are located at</p></div>
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
.bg {
  background-image: url("@/assets/VietnamilainenRavintolaKim_Discovery.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
