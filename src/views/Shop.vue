<script setup>
import { useRoute } from "vue-router";
import { useUserstore } from "../../stores/userStore";
import { ref, onMounted } from "vue";

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
  <h1>Shop</h1>

  <p>{{ route.params.shoptype }}</p>
  <ul v-if="store">
    <li v-for="item in makeUniqueArr(store[route.params.shoptype])">
      Item name: {{ item.category }}
      <img :src="item.img" :alt="item.category" />
    </li>
  </ul>
</template>
<style scoped>
li {
  font-size: larger;
}
</style>
