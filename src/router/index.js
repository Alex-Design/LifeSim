import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CharacterView from "../views/CharacterView.vue";
import ShopView from "../views/ShopView.vue";
import JobView from "../views/JobView.vue";
import ActivityView from "../views/ActivityView.vue";
import EventsView from "../views/EventsView.vue";

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
      component: ActivityView,
    },
    {
      path: "/events",
      name: "events",
      component: EventsView,
    },
  ],
});

export default router;
