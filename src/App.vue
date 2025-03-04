<script setup>
import { useUserstore } from "../stores/userStore.js";
import { onMounted } from "vue";
import { RouterView } from "vue-router";
onMounted(() => {
  userStore.getData();
});
const userStore = useUserstore();
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
