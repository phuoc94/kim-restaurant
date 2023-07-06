<script>
export default {
  name: "FrameThree",
};
</script>

<template>
  <div class="flex flex-row">
    <div
      class="absolute bg-white w-[600px] px-32 py-12 rounded-2xl text-center self-center right-12"
    >
      <div class="stars flex gap-4 justify-center">
        <i class="icon pi pi-star-fill"></i>
        <i class="icon pi pi-star-fill"></i>
        <i class="icon pi pi-star-fill"></i>
        <i class="icon pi pi-star-fill"></i>
        <i class="icon pi pi-star-fill"></i>
      </div>
      <p class="my-4">
        Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit.
        Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim
        magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis.
        Ornare tincidunt tempus semper
      </p>
      <h4>Ama Ampomah, Google Review</h4>
    </div>
    <div class="basis-2/3">
      <img src="@/assets/slice2.png" />
    </div>
    <div class="basis-1/3 bg-[rgba(23,23,23,0.80)]"></div>
  </div>
</template>

<style scoped>
.pi-star-fill {
  color: #ffbb00;
}

p {
  color: #5c6574;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
}

h4 {
  color: #101a24;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 29px;
}
</style>
