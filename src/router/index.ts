import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import MenuView from "../views/MenuView.vue";
import ContactView from "../views/ContactView.vue";
import GalleryView from "../views/GalleryView.vue";
import BestSeller from "../components/BestSeller.vue";
import LunchBuffet from "../components/LunchBuffet.vue";
import ALaCarte from "../components/ALaCarte.vue";
import Reservation from "../components/FrameFour.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/menu",
    name: "menu",
    component: MenuView,
    children: [
      {
        path: "bestseller",
        name: "bestseller",
        component: BestSeller,
      },
      {
        path: "lunchbuffet",
        name: "lunchbuffet",
        component: LunchBuffet,
      },
      {
        path: "alacarte",
        name: "alacarte",
        component: ALaCarte,
      },
      {
        path: "reservation",
        name: "reservation",
        component: Reservation,
      },
    ],
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: GalleryView,
  },
];

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return { top: 0 };
    }
  },
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
