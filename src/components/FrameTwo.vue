<script>
export default {
  name: "FrameTwo",
};
</script>

<template>
  <div
    class="container mx-auto min-h-screen grid grid-cols-1 items-center lg:grid-cols-2"
  >
    <div class="basis-1/2 flex justify-center mt-16 lg:margin-0">
      <img class="image" src="@/assets/mihoanhthanh.png" />
    </div>
    <div class="basis-1/2 p-11 mt-">
      <h1 class="text-center">Wecome to Our Restaurant</h1>
      <p class="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div class="buttons grid grid-cols-auto">
        <button class="button col-auto min-w-[150px] max-w-[160px]">
          Buffet menu
        </button>

        <button class="button col-auto min-w-[150px] max-w-[160px]">
          A-la-carté menu
        </button>

        <button class="button-second col-auto min-w-[150px] max-w-[160px]">
          Book a table
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: #101a24;
  font-size: 3.75rem;
  font-family: David Libre;
  font-style: normal;
  font-weight: 700;
  line-height: 4.0625rem;
  margin-bottom: 1.87rem;
}

p {
  font-size: 1rem;
  color: #5c6574;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8125rem;
  margin-bottom: 0.75rem;
}

.buttons {
  gap: 1rem;
}
.button {
  padding: 0.75rem 2rem;
  border-radius: 0.3125rem;
  background: var(--ffbb-00, #ffc933);
  color: var(--171717, #171717);
  font-size: 1rem;
  font-family: David Libre;
  font-style: normal;
  font-weight: 700;
  line-height: 1.8125rem;
}

.button-second {
  padding: 0.75rem 2rem;
  border-radius: 0.3125rem;
  background: var(--171717, #171717);
  color: var(--f-0-f-0-f-0, #f0f0f0);
  font-size: 1rem;
  font-family: David Libre;
  font-style: normal;
  font-weight: 700;
  line-height: 1.8125rem;
}
</style>
