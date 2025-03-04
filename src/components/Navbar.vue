<script setup>
import { RouterLink } from "vue-router";
/* import { useSearchStore } from "../../stores/useSearchStore";

const searchStore = useSearchStore();

const activeSearch = () => {
  searchStore.triggerSearch();
}; */
</script>

<template>
  <nav
    class="fixed bottom-0 left-0 w-full bg-white border-t border-gray-400 shadow-md"
  >
    <div class="flex justify-around items-center h-20">
      <!-- #1: Home Icon -->
      <RouterLink to="/" class="nav-item flex flex-col items-center group">
        <img
          src="/src/assets/navbar/home_outline.svg"
          alt="Home"
          class="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 transition duration-300 group-hover:hidden"
        />
        <img
          src="/src/assets/navbar/home_solid.svg"
          alt="Home"
          class="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 transition duration-300 hidden group-hover:block"
        />
      </RouterLink>

      <!-- #2: Search Icon -->
      <RouterLink to="#" class="nav-item flex flex-col items-center group">
        <img
          src="/src/assets/navbar/search_outline.svg"
          alt="search"
          class="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 transition duration-300 group-hover:hidden"
        />
        <img
          src="/src/assets/navbar/search_solid.svg"
          alt="Home"
          class="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 transition duration-300 hidden group-hover:block"
        />
      </RouterLink>

      <!-- #3: Ao Bea Logo -->
      <RouterLink to="" class="nav-item">
        <div class="logo-container">
          <img
            src="/src/assets/navbar/ao_bea_logo.svg"
            alt="Logo"
            class="h-14 w-auto"
          />
        </div>
      </RouterLink>

      <!-- #4: Favorites Icon -->

      <RouterLink
        to="/favorites"
        class="nav-item flex flex-col items-center group"
      >
        <img
          src="/src/assets/navbar/heart_outline.svg"
          alt="search"
          class="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 transition duration-300 group-hover:hidden"
        />
        <img
          src="/src/assets/navbar/heart_solid.svg"
          alt="Home"
          class="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 transition duration-300 hidden group-hover:block"
        />
      </RouterLink>

      <RouterLink to="/user" class="nav-item flex flex-col items-center group">
        <img
          src="/src/assets/navbar/user_outline.svg"
          alt="search"
          class="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 transition duration-300 group-hover:hidden"
        />
        <img
          src="/src/assets/navbar/user_solid.svg"
          alt="Home"
          class="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 transition duration-300 hidden group-hover:block"
        />
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped></style>

<!-- Added Shop view and implemented search functionality with Pinia store (useSearchStore) and Navbar + SearchbarComp. Also updated Navbar icons. 2025-03-03 -->
