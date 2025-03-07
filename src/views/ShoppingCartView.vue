<script setup>
import SearchbarComp from "../components/SearchbarComp.vue";
import { RouterLink } from "vue-router";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>

<!-- Hårdkodat eftersom att vår db.json inte är en riktig databas och därmed kan man inte använda axios.delete() eller axios.post(). -->

<template>
  <SearchbarComp></SearchbarComp>
  <h1 class="ml-4 mt-10 mb-10">Varukorg</h1>

  <section>
    <section class="product">
      <img
        src="/src/assets/shop-new-arrivals/women/dam1.png"
        alt="Dubbelknäppt kavaj i bomull"
        class="w-[115px] h-[164px]"
      />
      <div class="productDescription">
        <h2>Dubbelknäppt kavaj i bomull</h2>
        <p>1590 kr</p>
        <p>Storlek: 36</p>
      </div>
      <div class="flex flex-col justify-between items-end w-[100%] text-2xl">
        <p>1x</p>
        <p class="text-base">Ta bort</p>
      </div>
    </section>
    <RouterLink>
      <div
        class="bg-[var(--dark3)] p-4 relative min-w-[190px] m-[1em] mt-10 h-[44px] flex justify-center items-center rounded-[4px]"
      >
        <h3 class="text-white whitespace-nowrap text-[10px]">
          Lägg till i varukorg
        </h3>
      </div>
    </RouterLink>
  </section>
  <Footer></Footer>
  <Navbar></Navbar>
</template>

<style scoped>
.product {
  display: flex;
  padding: 0.8em;
}

.product * {
  margin: 0.2em;
}

.productDescription {
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: 36px;
}

h2 {
  font-family: "Merriweather Sans", sans-serif;
  font-weight: normal;
  font-size: 24px;
}
</style>
