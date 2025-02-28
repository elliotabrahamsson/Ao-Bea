<script setup></script>

<template>
  <nav
    class="fixed bottom-0 left-0 w-full bg-white border-t border-gray-400 shadow-md"
  >
    <div class="flex justify-around items-center h-20">
      <!-- #1: Home Icon -->
      <router-link to="" class="nav-item">
        <img
          src="/src/assets/navbar/navicon_home.svg"
          alt="home"
          class="w-7 h-7 text-gray-500 hover:text-black"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 9.75L12 3l9 6.75V21a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 21V9.75z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 21V10.5h6V21"
        />
      </router-link>

      <!-- #2: Search Icon -->
      <router-link to="" class="nav-item">
        <img
          src="/src/assets/navbar/navicon_search.svg"
          alt="search"
          class="w-7 h-7 text-gray-500 hover:text-black"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 9.75L12 3l9 6.75V21a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 21V9.75z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 21V10.5h6V21"
        />
      </router-link>

      <!-- #3: Ao Bea Logo
       [!] > Convert to SVG as well instead of png < [!] -->
      <div class="logo-container">
        <img
          src="/src/assets/navbar/Ao Bea_logo.png"
          alt="Logo"
          class="h-14 w-auto"
        />
      </div>

      <!-- #4: Favorites Icon -->

      <router-link to="" class="nav-item">
        <img
          src="/src/assets/navbar/navicon_heart.svg"
          alt="favorites"
          class="w-7 h-7 text-gray-500 hover:text-black"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 9.75L12 3l9 6.75V21a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 21V9.75z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 21V10.5h6V21"
        />
      </router-link>

      <!-- #5: User Icon -->
      <router-link to="" class="nav-item">
        <img
          src="/src/assets/navbar/navicon_user.svg"
          alt="user"
          class="w-7 h-7 text-gray-500 hover:text-black"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 9.75L12 3l9 6.75V21a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 21V9.75z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 21V10.5h6V21"
        />
      </router-link>
    </div>
  </nav>
</template>

<style scoped></style>
