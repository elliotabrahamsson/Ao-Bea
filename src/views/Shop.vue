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
  text-align: center;
}
li {
  font-size: larger;
}
</style>
