import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../src/views/HomeView.vue";
import Shop from "../src/views/Shop.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/shop",
      name: "Shop",
      component: Shop,
    },
  ],
});

export default router;
