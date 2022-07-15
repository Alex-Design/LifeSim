import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CharacterView from "../views/CharacterView.vue";
import ShopView from "../views/ShopView.vue";
import JobView from "../views/JobView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "default",
      component: CharacterView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/character",
      name: "character",
      component: CharacterView,
    },
    {
      path: "/shop",
      name: "shop",
      component: ShopView,
    },
    {
      path: "/job",
      name: "job",
      component: JobView,
    },
    {
      path: "/activities",
      name: "activities",
      component: JobView,
    },
  ],
});

export default router;
