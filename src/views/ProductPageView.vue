<script setup>
import CheckoutButton from "../components/CheckoutButton.vue";
import { computed } from "vue";
import { useUserstore } from "../../stores/userStore";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { ref, onMounted, watch } from "vue";
import SearchbarComp from "../components/SearchbarComp.vue";
import DropdownColors from "../components/DropdownColors.vue";
import DropdownCare from "../components/DropdownCare.vue";
import DropdownProd from "../components/DropdownProd.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import Carousel1 from "../components/Carousel1.vue";
import Carousel2 from "../components/Carousel2.vue";
import BreadCromb from "../components/BreadCromb.vue";

const userStore = useUserstore();
const { data } = storeToRefs(userStore);
//const products = makeUniqueProducts(userStore.data?.mens_fashion, 1);
const route = useRoute();
const shoptype = route.params.shoptype;

// const id = parseInt(route.params.id);

const store = ref(null);

onMounted(() => {
  store.value = data.value;
});

const products = computed(() => {
  return data.value?.[shoptype]?.find(
    (product) => product.ID === parseInt(route.params.id)
  );
});

const isOpen = ref(false);
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <SearchbarComp />
  <BreadCromb />
  <div v-if="products" class="">
    <div class="p-5">
      <img :src="products.Image" :alt="products.Name" />
    </div>
    <h3 class="flex justify-center items-center text-center p-2 mt-2 mb-2">
      {{ products.Name }}
    </h3>

    <DropdownColors :Colors="products.Colors" />

    <div
      class="flex flex-wrap text-center justify-center items-center gap-4.5 p-2"
    >
      <p
        v-for="size in products.Size"
        :key="size"
        class="border w-[4.3rem] h-[29px]"
      >
        {{ size }}
      </p>
    </div>

    <div class="p-1">
      <CheckoutButton class="rounded-[4px]" />
    </div>

    <div class="p-4">
      <DropdownProd :ProductDesc="products.ProductDescription" />
      <DropdownCare :Material="products.MaterialDescription" />

      <Carousel1 :category="shoptype" />
      <Carousel2 :category="shoptype" />
    </div>
    <Footer />
    <Navbar />
  </div>
</template>

<style scoped></style>
