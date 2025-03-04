<script setup>
import { defineProps } from "vue";

const props = defineProps({
  category: String,
  clothingImg: Image,
});
</script>

<template>
  <section id="card">
    <div>
      <h3>{{ category }}</h3>
    </div>
    <img :src="clothingImg" :alt="category" />
  </section>
</template>

<style scoped>
#card {
  width: 207px;
  height: 257px;

  color: white;
  position: relative;
}

img {
  width: 100%;
  height: 100%;
  display: block;
}

div {
  position: absolute;

  width: 100%;
  height: 100%;
  text-align: center;

  top: 0;
  left: 0;

  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;
}

h3 {
  background-color: var(--dark3);
  padding: 0.3em;
}
</style>
