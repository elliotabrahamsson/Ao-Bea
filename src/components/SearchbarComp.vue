<script setup>
import { ref, onMounted } from "vue";
import { useUserstore } from "../../stores/userStore.js";
import { RouterLink } from "vue-router";

const userInput = ref("");
const menuStatus = ref("display: none");
const userStore = useUserstore();

const GetShopCategories = () => {
  let shopCategoriesArr = [];
  let mensCategories = [];
  let womensCategories = [];

  userStore.data?.mens_fashion.forEach((item) => {
    if (!mensCategories.includes(item.Category)) {
      mensCategories.push(item.Category);
    }
  });

  userStore.data?.womens_fashion.forEach((item) => {
    if (!womensCategories.includes(item.Category)) {
      womensCategories.push(item.Category);
    }
  });

  shopCategoriesArr.push(mensCategories);
  shopCategoriesArr.push(womensCategories);

  return shopCategoriesArr;
  // console.log(shopCategoriesArr);
};

const shopCategories = ref(null);

const filterSearchInput = (input) => {
  if (input === "") {
    shopCategories.value = GetShopCategories();
  }
  // console.log("Körs");
  shopCategories.value.forEach((arr, index) => {
    shopCategories.value[index] = arr.filter((category) =>
      category.toLowerCase().includes(input.toLowerCase())
    );
  });
};

const showSearchMenu = () => {
  shopCategories.value = GetShopCategories();
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
        @keyup="filterSearchInput(userInput)"
        @click="showSearchMenu"
      />
      <!-- <p>Search icon</p> -->
      <img src="../assets/Searchbar/magnifyingglas.png" alt="Magnifying glas" />
    </div>
    <div id="searchOptions" :style="menuStatus">
      <ul v-if="shopCategories">
        <h4>Men's fashion</h4>
        <p v-if="shopCategories[0].length === 0">
          No matching categories found
        </p>
        <li v-for="category in shopCategories[0]">
          <!-- Ska bytas ut till rätt path -->
          <RouterLink to="/about">{{ category }}</RouterLink>
        </li>
      </ul>

      <ul v-if="shopCategories">
        <h4>Women's fashion</h4>
        <p v-if="shopCategories[1].length === 0">
          No matching categories found
        </p>
        <li v-for="category in shopCategories[1]">
          <!-- Ska bytas ut till rätt path -->
          <RouterLink to="/about">{{ category }}</RouterLink>
        </li>
      </ul>
    </div>
  </section>
  <!-- Detta byts ut mot sortering av fetch -->
  <p>{{ userInput }}</p>
</template>

<style scoped>
#searchOptions {
  display: flex;
}

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
