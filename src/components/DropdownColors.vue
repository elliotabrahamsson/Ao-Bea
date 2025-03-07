<script setup>
import { ref } from "vue";
import arrowDown from "/src/assets/dropdown/arrow-down.svg";
import xMark from "/src/assets/dropdown/x-mark.svg";
import { defineProps } from "vue";

const props = defineProps({
  Colors: {
    type: Array,
    required: true,
  },
});

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
        <p>Välj färg</p>
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
      <ul class="flex flex-col gap-2 my-4 p-2">
        <li
          v-for="(color, index) in props.Colors"
          :key="index"
          class="flex justify-center items-center"
        >
          {{ color }}
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.dropdown {
  background-color: var(--bright1);
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
  background-color: var(--bright1);
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
.open-content li {
  font-family: "Merriweather Sans", sans-serif;
  font-weight: light;
}
</style>
