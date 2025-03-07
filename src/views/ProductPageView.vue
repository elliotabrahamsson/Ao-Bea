<script setup>
import CheckoutButton from "../components/CheckoutButton.vue";
import { computed } from "vue";
import { useUserstore } from "../../stores/userStore";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import SearchbarComp from "../components/SearchbarComp.vue";
import DropdownCare from "../components/DropdownCare.vue";
import DropdownProd from "../components/DropdownProd.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import Carousel1 from "../components/Carousel1.vue";
import Carousel2 from "../components/Carousel2.vue";

const userStore = useUserstore();
const { data } = storeToRefs(userStore);
//const products = makeUniqueProducts(userStore.data?.mens_fashion, 1);
const route = useRoute();

const store = ref(null);

onMounted(() => {
  store.value = data.value;
});

const products = computed(() => {
  return data.value?.womens_fashion?.find((product) => product.ID === 14);
});
</script>

<template>
  <SearchbarComp />
  <div v-if="products" class="">
    <div class="p-5">
      <img :src="products.Image" :alt="products.Name" />
    </div>
    <h3 class="flex justify-center items-center text-center p-2 mt-2 mb-2">
      {{ products.Name }}
    </h3>
    <div class="flex justify-center items-center gap-2 my-4 p-2">
      <p
        v-for="color in products.Colors"
        :key="color"
        class="flex justify-center items-center"
      >
        {{ color }}
      </p>
    </div>
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

      <Carousel1 />
      <Carousel2 />
    </div>
    <Footer />
    <Navbar />
  </div>
</template>

<style scoped></style>
