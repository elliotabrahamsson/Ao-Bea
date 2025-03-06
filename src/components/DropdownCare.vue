<script setup>
import { ref } from "vue";
import arrowDown from "/src/assets/dropdown/arrow-down.svg";
import xMark from "/src/assets/dropdown/x-mark.svg";

const isOpen = ref(false);
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="dropdown">
    <button
      @click="toggleDropdown"
      :class="{ open: isOpen }"
      class="dropdown-btn"
    >
      <div class="button-content">
        <p>Material & Skötsel</p>
        <img
          :src="isOpen ? xMark : arrowDown"
          alt="Dropdown arrow"
          class="icon w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 transition duration-150 transform"
          :class="{ 'rotate-90': isOpen }"
        />
      </div>
    </button>
    <div
      v-show="isOpen"
      class="dropdown-content"
      :class="{ 'open-content': isOpen }"
    >
      <!-- Ersätt text med relevant produktdata -->
      <div class="product-info">
        <p><strong>Komposition:</strong></p>
        <p>Bomull 100%</p>

        <p><strong>Skötselråd:</strong></p>
        <ul>
          <li>• Kemtvätt</li>
          <li>• Endast icke-klorblekmedel vid behov.</li>
          <li>• Hängtorka</li>
          <li>• High Iron</li>
          <li>• Maskintvätt 40 grader</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown {
  background-color: var(--bright2);
  max-width: 400px;
  min-height: 50px;
  margin: auto;
  margin-bottom: 20px;
}

.dropdown-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 30px;
  box-sizing: border-box;
}
.button-content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  font-size: 20px;
}
.open {
  background-color: var(--buttonActive);
}
.dropdown-content {
  background-color: var(--bright1);
  height: 0;
  overflow: hidden;
  transition: height 0.3s ease-out;
}
.open-content {
  height: auto;
  padding: 10px;
  opacity: 1;
}
.product-info li {
  font-family: "Merriweather Sans", sans-serif;
  font-weight: normal;
}
.product-info strong {
  display: block;
  margin-bottom: 10px;
}
.product-info p {
  margin-top: 10px;
}
</style>
