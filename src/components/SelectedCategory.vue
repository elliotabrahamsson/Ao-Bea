<script setup>
import { useUserstore } from "../../stores/userStore";

const props = defineProps({
  selectedCategory: String,
  selectedShop: String,
});

const store = useUserstore(); //Använder userStore
</script>

<template>
  <div class="mt-3">
    <p class="pl-4">
      Alla kategorier <span class="mx-2 text-xl">→</span>
      <strong>{{ selectedCategory }}</strong>
    </p>
  </div>
  <div class="mt-5">
    <h2 class="text-center">{{ selectedCategory }}</h2>
  </div>
  <div class="mt-5">
    <div class="grid grid-cols-2 gap-4 justify-center">
      <div
        class="p-2"
        v-for="item in store.data?.[selectedShop].filter((item) => {
          return item.Category === selectedCategory;
        })"
        :key="item.id"
      >
        <RouterLink
          :to="`/shop/${selectedShop}/${selectedCategory}/${item.ID}`"
        >
          <img :src="item.Image" alt="" class="w-full h-auto" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<style scoped>
img {
  width: 100%;
  height: auto;
}
p {
  font-size: 16px;
}
</style>
