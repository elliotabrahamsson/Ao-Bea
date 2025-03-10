import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../src/views/HomeView.vue";
import Shop from "../src/views/Shop.vue";
import AboutView from "../src/views/AboutView.vue";
import CategoryView from "../src/views/CategoryView.vue";
import ProductPageView from "../src/views/ProductPageView.vue";
import CheckoutView from "../src/views/CheckoutView.vue";
import ConfirmationView from "../src/views/ConfirmationView.vue";
import ShoppingCartView from "../src/views/ShoppingCartView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
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
    {
      path: "/checkout",
      name: "Checkout",
      component: CheckoutView,
    },
    {
      path: "/shop/:shoptype/:category/:id",
      name: "Product",
      component: ProductPageView,
      props: true,
    },
    {
      path: "/shop/:shoptype/:category",
      name: "Category",
      component: CategoryView,
    },
    {
      path: "/orderconfirmation",
      name: "orderConfirmation",
      component: ConfirmationView,
    },
    {
      path: "/cart",
      name: "Cart",
      component: ShoppingCartView,
    },
  ],
});

export default router;
