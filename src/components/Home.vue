<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <RouterLink to="/shop">
    <div class="women">
      <h2>Shop Women</h2>
      <div class="img-container">
        <img
          src="https://via.placeholder.com/600x400?text=Women"
          alt="Shop Women"
        />
      </div>
    </div>
  </RouterLink>
  <div class="logo">
    <img
      src="https://via.placeholder.com/150x50?text=Ao+Bea"
      alt="Ao Bea logotype"
    />
  </div>
  <RouterLink to="/shop">
    <div class="men">
      <h2>Shop Men</h2>
      <div class="img-container">
        <img
          src="https://via.placeholder.com/600x400?text=Men"
          alt="Shop Men"
        />
      </div>
    </div>
  </RouterLink>
</template>
<style scoped>
.women,
.men {
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 100%;
  justify-content: center;
  padding: 10px;
}
h2 {
  font-size: 1.5rem;
  font-weight: bold;
}
.women {
  background-color: #fde8e8;
  text-align: left;
}

.men {
  background-color: #b1d3ff;
  text-align: right;
}
.logo {
  position: absolute;
  top: 60%;
  left: 35%;
  z-index: 2;
}
.img-container {
  display: flex;
  width: 50%;
}
.women .img-container {
  margin-left: 40%;
  justify-content: flex-end;
}
.men .img-container {
  justify-content: flex-start;
}
.women,
.men {
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 100%;
  justify-content: center;
  padding: 10px;
}

.women {
  background-color: var(--bg-women);
  text-align: left;
}
.women img {
  justify-content: end;
}
.men {
  background-color: var(--bg-men);
  text-align: right;
}
</style>
