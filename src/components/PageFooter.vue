<script>
export default {
  name: "PageFooter",
};
</script>

<template>
  <div class="page-footer bg-[rgba(23,23,23,0.80)]">
    <div class="container mx-auto pt-[64px] p-11 md:py-28 md:flex">
      <div class="md:flex md:basis-1/2 gap-4">
        <div class="md:basis-1/3 min-w-[125px]">
          <h4>Open hours</h4>
          <div class="mt-3">
            <p>Ma 11:00 - 14:30</p>
            <p>Ti-Pe 11:00 - 21:00</p>
            <p>La 12:00 - 21:00</p>
            <p>Su 12:00 - 20:30</p>
          </div>
        </div>
        <div class="md:basis-1/3 mt-14 md:mt-0">
          <h4>Navigation</h4>
          <div class="mt-3">
            <router-link to="/menu">
              <p class="button">Menu</p>
            </router-link>
            <router-link to="/about">
              <p class="button">About us</p>
            </router-link>
            <router-link to="/contact">
              <p class="button">Contact us</p>
            </router-link>
          </div>
        </div>
        <div class="mt-14 md:mt-0 md:basis-1/3">
          <h4>FOLLOW US <i class="icon pi pi-facebook ml-2"></i></h4>
        </div>
      </div>
      <div
        class="flex items-baseline gap-1 mt-14 md:justify-end md:basis-1/2 md:mt-0"
      >
        <div class="see-you">See you at Kim</div>
        <img src="@/assets/image-5.png" />
      </div>
    </div>
  </div>
</template>

<style scoped>
h4 {
  color: #f0f0f0;

  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 29px;
}


p {
  color: #f0f0f0;
  font-family: Montserrat;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8125rem;
}
.see-you {
  color: #fb0;
  font-family: Times New Roman;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 65px;
}
</style>
