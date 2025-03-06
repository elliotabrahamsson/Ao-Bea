import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../src/views/HomeView.vue";
import Shop from "../src/views/Shop.vue";
import AboutView from "../src/views/AboutView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/shop/:shoptype",
      name: "Shop",
      component: Shop,
    },
    {
      path: "/about",
      name: "About",
      component: AboutView,
    },
  ],
});

export default router;
