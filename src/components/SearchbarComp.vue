<script setup>
import { ref, watch } from "vue";

const userInput = ref(null);

watch(userInput, (searchResult) => {
  userInput.value = searchResult;
});
</script>

<template>
  <section
    class="flex justify-center items-center w-full h-30 bg-amber-200 text-white"
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
      />
      <p>Search icon</p>
    </div>
  </section>
  <!-- Detta byts ut mot sortering av fetch -->
  <p>{{ userInput }}</p>
</template>

<style scoped>
div {
  background-color: #403d37;
}

div * {
  margin: 0em 1.5em;
}

::placeholder {
  color: white;
}
</style>
