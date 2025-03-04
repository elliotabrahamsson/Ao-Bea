import { createRouter, createWebHistory } from "vue-router";
import Home from "../src/components/Home.vue";
import Shop from "../src/views/Shop.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/shop",
      name: "Shop",
      component: Shop,
    },
  ],
});

export default router;
