<script setup>
import { useRoute } from "vue-router";
import { useUserstore } from "../../stores/userStore";
import { ref, onMounted } from "vue";
import CategoryCard from "../components/CategoryCard.vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import SearchbarComp from "../components/SearchbarComp.vue";

const userStore = useUserstore();
const route = useRoute();
const store = ref(null);

const makeUniqueArr = (arr) => {
  let uniqueArray = [];
  arr.forEach((item) => {
    if (!uniqueArray.find((obj) => obj.category === item.Category)) {
      uniqueArray.push({ category: `${item.Category}`, img: `${item.Image}` });
    }
  });
  return uniqueArray;
};

onMounted(() => {
  store.value = userStore.data;
});
</script>
<template>
  <SearchbarComp></SearchbarComp>

  <h1 v-if="route.params.shoptype === 'mens_fashion'">Mens fashion</h1>
  <h1 v-else>Womens fashion</h1>
  <div v-if="store" class="grid grid-cols-2 justify-items-center">

  <p>{{ route.params.shoptype }}</p>
  <div v-if="route.params.shoptype === 'womens_fashion'" class="women-new-arrivals-container">
    <div class="upper-pictures-container grid grid-cols-2 justify-center">
      <img class="mx-auto shadow-md" src="/src/assets/shop-new-arrivals/women/dam1.png" alt="picture of product - new arrivals">
      <img class="mx-auto shadow-md" src="/src/assets/shop-new-arrivals/women/dam2.png" alt="picture of product - new arrivals">
    </div>
    <h2 class="text-center">NEW ARRIVALS</h2>
    <div class="lower-pictures-container grid grid-cols-2 mb-10 gap-2 justify-center">
      <img class="mx-auto shadow-md" src="/src/assets/shop-new-arrivals/women/dam4.png" alt="picture of product - new arrivals">
    <img class="mx-auto shadow-md" src="/src/assets/shop-new-arrivals/women/dam3.png" alt="picture of product - new arrivals">
    </div>
  </div>
  <div v-else-if="route.params.shoptype === 'mens_fashion'" class="men-new-arrivals-container">
    <div class="upper-pictures-container grid grid-cols-2 justify-center">
      <img class="mx-auto shadow-md" src="/src/assets/shop-new-arrivals/men/Men3.png" alt="picture of product - new arrivals">
      <img class="mx-auto shadow-md" src="/src/assets/shop-new-arrivals/men/Men2.png" alt="picture of product - new arrivals">
    </div>
    <h2 class="text-center">NEW ARRIVALS</h2>
    <div class="lower-pictures-container grid grid-cols-2 mb-10 gap-2 justify-center">
      <img class="mx-auto shadow-md" src="/src/assets/shop-new-arrivals/men/Men4.png" alt="picture of product - new arrivals">
    <img class="mx-auto shadow-md" src="/src/assets/shop-new-arrivals/men/Men1.png" alt="picture of product - new arrivals">
    </div>
  </div>

  <h2 class="text-center">CATEGORIES</h2>
  <div v-if="store" class="grid grid-cols-2 gap-2">

    <CategoryCard
      :category="item.category"
      :clothingImg="item.img"
      v-for="(item, index) in makeUniqueArr(store[route.params.shoptype])"
      :key="index"
    />
  </div>
  <Footer></Footer>
  <Navbar></Navbar>
</template>
<style scoped>
h1 {
  margin: 0.7em;
  text-align: center;
}
li {
  font-size: larger;
}


</style>
