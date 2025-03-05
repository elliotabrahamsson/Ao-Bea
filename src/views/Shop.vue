<script setup>
import { useRoute } from "vue-router";
import { useUserstore } from "../../stores/userStore";
import { useUniqueArr } from "../../stores/userStore";
import { computed } from "vue";
import { ref, onMounted } from "vue";
import CategoryCard from "../components/CategoryCard.vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import SearchbarComp from "../components/SearchbarComp.vue";
import { storeToRefs } from "pinia";

const userStore = useUserstore();
const { data } = storeToRefs(userStore);
const uniqueArr = useUniqueArr();
const route = useRoute();

const store = ref(null);

onMounted(() => {
  store.value = data.value;
});

const filteredCategories = computed(() => {
  if (!store.value || !store.value[route.params.shoptype]) return [];
  return uniqueArr.makeUniqueArr(store.value[route.params.shoptype]);
});
</script>
<template>
  <SearchbarComp></SearchbarComp>
  <p>{{ route.params.shoptype }}</p>
  <div v-if="filteredCategories.length" class="grid grid-cols-2">
    <CategoryCard
      v-for="(item, index) in filteredCategories"
      :key="index"
      :category="item.category"
      :clothingImg="item.img"
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
