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

  <h1 v-if="route.params.shoptype === 'mens_fashion'">Herrmode</h1>
  <h1 v-else>Dammode</h1>

  <div
    v-if="route.params.shoptype === 'womens_fashion'"
    class="women-new-arrivals-container"
  >
    <div class="upper-pictures-container grid grid-cols-2 justify-center">
      <router-link to="/shop/womens_fashion/Outerwear/1">
        <img
          class="mx-auto shadow-md"
          src="/src/assets/shop-new-arrivals/women/dam1.png"
          alt="picture of product - new arrivals"
        />
      </router-link>
      <router-link to="/shop/womens_fashion/Tröja/2">
        <img
          class="mx-auto shadow-md"
          src="/src/assets/shop-new-arrivals/women/dam2.png"
          alt="picture of product - new arrivals"
        />
      </router-link>
    </div>
    <h2 class="text-center my-4">NEW ARRIVALS</h2>
    <div
      class="lower-pictures-container grid grid-cols-2 mb-10 gap-2 justify-center"
    >
      <router-link to="/shop/womens_fashion/Tröja/4">
        <img
          class="mx-auto shadow-md"
          src="/src/assets/shop-new-arrivals/women/dam4.png"
          alt="picture of product - new arrivals"
        />
      </router-link>
      <router-link to="/shop/womens_fashion/Pants/3">
        <img
          class="mx-auto shadow-md"
          src="/src/assets/shop-new-arrivals/women/dam3.png"
          alt="picture of product - new arrivals"
        />
      </router-link>
    </div>
  </div>
  <div
    v-else-if="route.params.shoptype === 'mens_fashion'"
    class="men-new-arrivals-container"
  >
    <div class="upper-pictures-container grid grid-cols-2 justify-center">
      <router-link to="/shop/mens_fashion/Outerwear/9">
        <img
          class="mx-auto shadow-md"
          src="/src/assets/shop-new-arrivals/men/Men3.png"
          alt="picture of product - new arrivals"
        />
      </router-link>
      <router-link to="/shop/mens_fashion/Tröja/6">
        <img
          class="mx-auto shadow-md"
          src="/src/assets/shop-new-arrivals/men/Men2.png"
          alt="picture of product - new arrivals"
        />
      </router-link>
    </div>

    <h2 class="text-center my-4">NEW ARRIVALS</h2>
    <div
      class="lower-pictures-container grid grid-cols-2 mb-10 gap-2 justify-center"
    >
      <router-link to="/shop/mens_fashion/Tröja/7">
        <img
          class="mx-auto shadow-md"
          src="/src/assets/shop-new-arrivals/men/Men4.png"
          alt="picture of product - new arrivals"
        />
      </router-link>
      <router-link to="/shop/mens_fashion/Skjorta/1">
        <img
          class="mx-auto shadow-md"
          src="/src/assets/shop-new-arrivals/men/Men1.png"
          alt="picture of product - new arrivals"
        />
      </router-link>
    </div>
  </div>

  <h2 class="text-center">CATEGORIES</h2>

  <div
    v-if="filteredCategories.length"
    class="grid grid-cols-2 justify-items-center"
  >
    <CategoryCard
      v-for="(item, index) in filteredCategories"
      :key="index"
      :category="item.category"
      :clothingImg="item.img"
      :shopType="route.params.shoptype"
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

.upper-pictures-container img {
  min-width: 190px;
  min-height: 240px;
}

.lower-pictures-container img {
  min-width: 190px;
  min-height: 240px;
}
</style>
