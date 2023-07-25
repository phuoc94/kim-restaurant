<template>
  <div>
    <div
      v-for="(dishes, category, index) in groupedDishes"
      :key="category"
      :class="index % 2 === 0 ? 'bg-zinc-700 text-white' : 'orange-50'"
    >
      <div class="container px-4 pb-24 pt-6 font-serif">
        <h1 class="h1 mb-12 text-center lg:text-left">{{ category }}</h1>

        <div
          class="mx-auto mb-4 grid max-w-screen-lg grid-cols-[44px_auto_70px] gap-2 lg:grid-cols-[60px_auto_minmax(50px,140px)_185px]"
          v-for="(dish, index) in dishes"
          :key="index"
        >
          <div class="grid-feature row-span-3 lg:row-span-2">
            <span v-if="dish.featured">
              <img src="@/assets/featured-icon.webp" />
            </span>
          </div>
          <div class="grid-title">
            <h3 class="text-xl md:text-2xl lg:font-bold">
              {{ dish.dishNo }}. {{ dish.title }}
            </h3>
          </div>
          <div
            class="grid-description col-span-2 lg:col-start-2 lg:row-start-2"
          >
            <p class="text-sm font-normal md:text-base">
              {{ dish.description }}
            </p>
          </div>
          <div
            class="grid-dietary col-start-3 row-start-1 lg:col-start-3 lg:row-start-1"
          >
            <p class="text-xl md:text-2xl lg:font-bold">
              {{ dish.dietary }}
            </p>
          </div>
          <div
            class="grid-price col-span-2 col-start-2 row-start-2 font-bold md:text-xl lg:col-span-1 lg:col-start-4 lg:row-span-2 lg:row-start-1"
          >
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
