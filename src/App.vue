<script setup>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import SearchbarComp from "./components/SearchbarComp.vue";
import Home from "./components/Home.vue";
import { useUserstore } from "../stores/userStore.js";
import { onMounted } from "vue";
onMounted(() => {
  userStore.getData();
});
const userStore = useUserstore();
</script>

<template>
  <SearchbarComp />
  <Home />
  <Navbar />
  <Footer />
</template>

<style scoped></style>
