import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import MenuView from "../views/MenuView.vue";
import ContactView from "../views/ContactView.vue";
import GalleryView from "../views/GalleryView.vue";
import BestSeller from "../components/BestSeller.vue";
import LunchBuffet from "../components/LunchBuffet.vue";
import ALaCarte from "../components/ALaCarte.vue";
import Reservation from "../components/MenuReservation.vue";

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

const ANCHOR_CHECK_MS = 100;
const ANCHOR_SETTLED_MS = 200;
// Longer than a request can take with all of its retries (utils/hygraphRequests.ts).
const ANCHOR_TIMEOUT_MS = 12000;

// Sections render only once their own content has loaded, so on a full page load the anchor does not exist yet, and
// the sections above it still change its position. Resolves when it has stayed in one place, or at the timeout.
const waitForAnchor = (selector: string) =>
  new Promise<void>((resolve) => {
    const started = Date.now();
    let settledSince = started;
    let lastTop: number | null = null;

    const check = () => {
      const anchor = document.querySelector(selector);
      const top = anchor
        ? anchor.getBoundingClientRect().top + window.scrollY
        : null;
      const now = Date.now();

      if (top === null || top !== lastTop) {
        lastTop = top;
        settledSince = now;
      }
      if (
        (top !== null && now - settledSince >= ANCHOR_SETTLED_MS) ||
        now - started >= ANCHOR_TIMEOUT_MS
      ) {
        resolve();
      } else {
        setTimeout(check, ANCHOR_CHECK_MS);
      }
    };

    check();
  });

const router = createRouter({
  async scrollBehavior(to) {
    if (to.hash) {
      await waitForAnchor(to.hash);
      // The visitor may have moved on, or the anchor may never have appeared.
      if (
        router.currentRoute.value.fullPath !== to.fullPath ||
        !document.querySelector(to.hash)
      ) {
        return false;
      }
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
