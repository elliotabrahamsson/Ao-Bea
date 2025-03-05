<script setup>
import { ref } from "vue";
import { useUserstore } from "../../stores/userStore.js";

const userInput = ref("");
const menuStatus = ref("display: none");
const userStore = useUserstore();

const GetShopCategories = () => {
  let shopCategoriesArr = [];
  let mensCategories = [];
  let womensCategories = [];

  userStore.data.mens_fashion.forEach((item) => {
    if (!mensCategories.includes(item.Category)) {
      mensCategories.push(item.Category);
    }
  });

  userStore.data.womens_fashion.forEach((item) => {
    if (!womensCategories.includes(item.Category)) {
      womensCategories.push(item.Category);
    }
  });

  shopCategoriesArr.push(mensCategories);
  shopCategoriesArr.push(womensCategories);

  return shopCategoriesArr;
  // console.log(shopCategoriesArr);
};

const showSearchMenu = () => {
  console.log(GetShopCategories());
  if (menuStatus.value === "display: none") {
    menuStatus.value = "";
  } else {
    menuStatus.value = "display: none";
  }
};
</script>

<template>
  <section
    class="flex justify-center items-center flex-col w-full text-white p-4"
  >
    <div
      id="searchbar"
      class="flex items-center justify-between h-14 w-9/10 rounded-full"
    >
      <input
        type="text"
        placeholder="Search for products..."
        class="w-full"
        v-model="userInput"
        @click="showSearchMenu"
      />
      <!-- <p>Search icon</p> -->
      <img src="../assets/Searchbar/magnifyingglas.png" alt="Magnifying glas" />
    </div>
    <div>
      <h1 :style="menuStatus">Menu</h1>
    </div>
  </section>
  <!-- Detta byts ut mot sortering av fetch -->
  <p>{{ userInput }}</p>
</template>

<style scoped>
div {
  background-color: var(--dark3);
}

div * {
  margin: 0em 1em;
}

::placeholder {
  color: white;
}
</style>
