<script setup>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import SearchbarComp from "./components/SearchbarComp.vue";
import Home from "./components/Home.vue";
import { useUserstore } from "../stores/userStore.js";
import { onMounted } from "vue";
import { RouterView } from "vue-router";
onMounted(() => {
  userStore.getData();
});
const userStore = useUserstore();
</script>

<template>
  <SearchbarComp />
  <RouterView />
  <Home />
  <Footer />
  <Navbar />
</template>

<style scoped></style>
