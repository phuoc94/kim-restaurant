<template>
  <div>
    <div
      v-for="(dishes, category, index) in groupedDishes"
      :key="category"
      :class="index % 2 === 0 ? 'bg-zinc-700 text-white' : 'orange-50'"
    >
      <div class="container px-4 pb-24 pt-6 font-serif font-bold">
        <h1 class="h1 mb-12">{{ category }}</h1>

        <div
          class="mx-auto mb-4 grid max-w-screen-lg grid-cols-[60px_auto_minmax(50px,140px)_185px] gap-2"
          v-for="(dish, index) in dishes"
          :key="index"
        >
          <div class="row-span-2">
            <span v-if="dish.featured">
              <svg
                width="59"
                height="59"
                viewBox="0 0 59 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect width="59" height="59" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0_433_346"
                      transform="scale(0.0172414)"
                    />
                  </pattern>
                  <image
                    id="image0_433_346"
                    width="58"
                    height="58"
                    xlink:href="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </span>
          </div>
          <div>
            <h3 class="text-2xl">{{ dish.dishNo }}. {{ dish.title }}</h3>
          </div>
          <div class="col-span-2 col-start-2 row-start-2">
            <p class="font-normal">{{ dish.description }}</p>
          </div>
          <div class="col-start-3 row-start-1">
            <p class="text-2xl">{{ dish.dietary }}</p>
          </div>
          <div class="col-start-4 row-span-2 row-start-1 text-xl">
            <div v-for="(price, priceIndex) in dish.prices" :key="priceIndex">
              <p v-if="dish.prices.length > 1">
                {{ price.title }}: {{ price.price }}
              </p>
              <p v-else>{{ price.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const Dishes = ref([
      {
        featured: true,
        dishNo: 1,
        title: "Goi cuôn",
        description:
          "Sekoitus salaattia, paprikaa, kurkkua, riisinuudeleita, hoisin- kastiketta ia maapähkinöitä",
        prices: [
          { title: "Tofu", price: "6,5" },
          { title: "Katkarapu", price: "7,5" },
        ],
        dietary: "L, G",
        image: null,
        category: "Alkuruoat",
      },
      {
        featured: true,
        dishNo: 1,
        title: "Rapeat katkaravut",
        description:
          "Friteerattu katkarapu salaatin, tomaatin ja hapanimeläkastikkeen kera",
        prices: [
          {
            title: null,
            price: "7,50",
          },
        ],
        dietary: "L, G",
        image: null,
        category: "Alkuruoat",
      },

      {
        featured: true,
        dishNo: 1,
        title: "Pho",
        description:
          "Perinteisia vietnamilaisia nuudeleita kanan a naudanlihan kera",
        prices: [
          {
            title: null,
            price: "14,50",
          },
        ],
        dietary: "L, G",
        image: null,
        category: "Vietnamilaiset Erikoisuudet",
      },
      {
        featured: true,
        dishNo: 1,

        title: "Pho",
        description:
          "Perinteisia vietnamilaisia nuudeleita kanan a naudanlihan kera",
        prices: [
          {
            title: null,
            price: "14,50",
          },
        ],
        dietary: "L, G",
        image: null,
        category: "Vietnamilaiset Erikoisuudet",
      },
      {
        featured: true,
        dishNo: 1,

        title: "Pho",
        description:
          "Perinteisia vietnamilaisia nuudeleita kanan a naudanlihan kera",
        prices: [
          {
            title: null,
            price: "14,50",
          },
        ],
        dietary: "L, G",
        image: null,
        category: "Vietnamilaiset Erikoisuudet",
      },
      {
        featured: true,
        dishNo: 1,

        title: "Pho",
        description:
          "Perinteisia vietnamilaisia nuudeleita kanan a naudanlihan kera",
        prices: [
          {
            title: null,
            price: "14,50",
          },
        ],
        dietary: "L, G",
        image: null,
        category: "Vietnamilaiset Erikoisuudet",
      },
      {
        featured: false,
        dishNo: 1,

        title: "Bò xão thom",
        description: "Naudanliha ananaksen kera",
        prices: [
          {
            title: null,
            price: "15,90",
          },
        ],
        dietary: "L, G",
        image: null,
        category: "Naudanliharuoat",
      },
      {
        featured: false,
        dishNo: 1,

        title: "Bò xão thom",
        description: "Naudanliha ananaksen kera",
        prices: [
          {
            title: null,
            price: "15,90",
          },
        ],
        dietary: "L, G",
        image: null,
        category: "Naudanliharuoat",
      },
      {
        featured: false,
        dishNo: 1,

        title: "Bò xão thom",
        description: "Naudanliha ananaksen kera",
        prices: [
          {
            title: null,
            price: "15,90",
          },
        ],
        dietary: "L, G",
        image: null,
        category: "Naudanliharuoat",
      },
      {
        featured: false,
        dishNo: 1,

        title: "Rapea kana hapanimeläkastikkeessa",
        description:
          "Kanaa paprikan, purjon, kevätsipulin ja seesamiöljyn kera, riisillä",
        prices: [
          {
            title: null,
            price: "16,00",
          },
        ],
        dietary: "L, G",
        image: null,
        category: "Broileri- ja kanaruoat",
      },
      {
        featured: false,
        dishNo: 1,

        title: "Rapea kana hapanimeläkastikkeessa",
        description:
          "Kanaa paprikan, purjon, kevätsipulin ja seesamiöljyn kera, riisillä",
        prices: [
          {
            title: null,
            price: "16,00",
          },
        ],
        dietary: "L, G",
        image: null,
        category: "Broileri- ja kanaruoat",
      },
      {
        featured: false,
        dishNo: 1,

        title: "Rapea kana hapanimeläkastikkeessa",
        description:
          "Kanaa paprikan, purjon, kevätsipulin ja seesamiöljyn kera, riisillä",
        prices: [
          {
            title: null,
            price: "16,00",
          },
        ],
        dietary: "L, G",
        image: null,
        category: "Broileri- ja kanaruoat",
      },
      {
        featured: false,
        dishNo: 1,

        title: "KungPao (sôt me)",
        description:
          "Parsakaali, paprika, porkkana, sipuli, tamarindi, purjo, chili ja cashew-pähkina, riisiä",
        prices: [
          {
            title: "Katkarapu",
            price: "18,90",
          },
          {
            title: "Kana",
            price: "15,50",
          },
          {
            title: "Tofu",
            price: "13,50",
          },
        ],
        dietary: "L, G",
        image: null,
        category: "Merenelävät  ja Muut Ruokalajit",
      },
    ]);

    const groupedDishes = computed(() => {
      return Dishes.value.reduce((grouped, dish) => {
        (grouped[dish.category] = grouped[dish.category] || []).push(dish);
        return grouped;
      }, {});
    });

    return { groupedDishes };
  },
};
</script>

<style scoped></style>
