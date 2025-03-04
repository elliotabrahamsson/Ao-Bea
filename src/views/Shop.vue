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
  <p>{{ route.params.shoptype }}</p>
  <div v-if="store" class="grid grid-cols-2">
    <CategoryCard
      :category="item.category"
      :clothingImg="item.img"
      v-for="item in makeUniqueArr(store[route.params.shoptype])"
    />
  </div>
  <Footer></Footer>
  <Navbar></Navbar>
</template>
<style scoped>
li {
  font-size: larger;
}
</style>
