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

const userStore = useUserstore();
const { data } = storeToRefs(userStore);
//const products = makeUniqueProducts(userStore.data?.mens_fashion, 1);
const route = useRoute();

const store = ref(null);

onMounted(() => {
  store.value = data.value;
});

const products = computed(() => {
  return data.value?.mens_fashion?.find((product) => product.ID === 2);
});
</script>

<template>
  <SearchbarComp />
  <div v-if="products" class="">
    <img :src="products.Image" :alt="products.Name" />
    <p class="flex justify-center items-center text-center mt-2 mb-2 text-xl">
      {{ products.Name }}
    </p>
    <div class="flex justify-center items-center gap-2 my-4">
      <p
        v-for="color in products.Colors"
        :key="color"
        class="flex justify-center items-center"
      >
        {{ color }}
      </p>
    </div>
    <div class="flex flex-wrap text-center justify-center items-center gap-4.5">
      <p v-for="size in products.Size" :key="size" class="border w-[4.5rem]">
        {{ size }}
      </p>
    </div>

    <CheckoutButton />

    <DropdownCare :Material="products.MaterialDescription" />
    <DropdownProd :ProductDesc="products.ProductDescription" />
    <Footer />
    <Navbar />
  </div>
</template>

<style scoped></style>
