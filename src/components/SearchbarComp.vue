<script setup>
import { ref, watch } from "vue";
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

watch(userInput, (input) => filterSearchInput(input));

const filterSearchInput = (input) => {
  menuStatus.value = "";
  shopCategories.value = GetShopCategories();
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
    class="flex justify-center items-center flex-col w-full text-white bg-[#f6f4f0]"
  >
    <div
      id="searchbar"
      class="flex items-center justify-between h-14 w-9/10 rounded-full"
    >
      <input
        type="text"
        placeholder="Search for product categories..."
        class="w-full"
        v-model="userInput"
        @click="showSearchMenu"
      />
      <img src="../assets/Searchbar/magnifyingglas.png" alt="Magnifying glas" />
    </div>
    <div id="searchOptions" :style="menuStatus">
      <div v-if="shopCategories">
        <RouterLink to="/shop/mens_fashion"><h4>Mens fashion</h4></RouterLink>
        <p v-if="shopCategories[0].length === 0">
          No matching categories found
        </p>
        <!-- Ska bytas ut till rätt path -->
        <RouterLink
          class="category"
          :to="'/shop/mens_fashion/' + category"
          v-for="category in shopCategories[0]"
          ><p>{{ category }}</p></RouterLink
        >
      </div>

      <div v-if="shopCategories">
        <RouterLink to="/shop/womens_fashion"
          ><h4>Womens fashion</h4></RouterLink
        >

        <p v-if="shopCategories[1].length === 0">
          No matching categories found
        </p>
        <!-- Ska bytas ut till rätt path -->
        <RouterLink
          class="category"
          :to="'/shop/womens_fashion/' + category"
          v-for="category in shopCategories[1]"
          ><p>{{ category }}</p></RouterLink
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
input {
  font-family: "Merriweather Sans", sans-serif;
  font-weight: lighter;
}

#searchbar {
  padding: 0em 1em;
  margin: 1em 1em;
}

#searchOptions {
  display: flex;
  justify-content: space-around;

  animation: 3s ease-in 1s;

  width: 100vw;
  padding: 1em;
}

#searchOptions div {
  display: flex;
  flex-direction: column;
}

.category {
  margin: 0.5em;
}

div {
  background-color: var(--dark3);
}

h4 {
  font-family: "Nexa Rust Sans", sans-serif;
  font-weight: 900;
  font-size: 18px;
}

::placeholder {
  color: white;
}
</style>
