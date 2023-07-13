<template>
  <div class="bg flex h-screen items-center justify-center px-4">
    <div
      class="basis-full divide-y-4 divide-dashed text-center md:basis-10/12 lg:basis-8/12 xl:basis-1/2"
    >
      <div class="pb-12"><h1>Open Time</h1></div>
      <div class="flex justify-between py-12">
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
      <div class="flex pt-6 text-left">
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
h1 {
  color: var(--f-0-f-0-f-0, #f0f0f0);

  font-family: Times New Roman;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 65px;
}
p {
  color: var(--f-0-f-0-f-0, #f0f0f0);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  line-height: normal;
}

.bg {
  background-image: url("@/assets/VietnamilainenRavintolaKim_Discovery.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
