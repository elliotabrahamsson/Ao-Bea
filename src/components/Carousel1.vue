<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { computed, onMounted } from "vue";
import { useUserstore } from "../../stores/userStore";

const store = useUserstore();

onMounted(() => {
  store.getData();
});

const womenProducts = computed(() => {
  if (!store.data || !store.data.womens_fashion) return [];

  return store.data.womens_fashion.slice(0, 4).map((product) => ({
    image: product.Image || "/src/assets/main-img/arketwomen.jpg",
  }));
});
</script>

<template>
  <div class="carousel-container">
    <p class="text-center text-2xl mb-4">Du kanske även gillar</p>

    <swiper
      :modules="[Navigation, Pagination]"
      :slides-per-view="1"
      :centered-slides="true"
      :space-between="10"
      :breakpoints="{
        640: { slidesPerView: 2.2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      }"
      navigation
      pagination
      class="swiper-container"
    >
      <swiper-slide v-for="(item, index) in womenProducts" :key="index">
        <img :src="item.image" alt="Product" class="rounded-md w-full h-auto" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.carousel-container {
  padding-bottom: 3vh;
}
p {
  font-family: "Merriweather sans", sans-serif;
  font-weight: lighter;
}

.swiper-slide img {
  max-width: 90%;
  margin: 0 auto;
  display: block;
  /* padding-bottom: 30px; */
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  color: black;
  font-size: 20px;
  background: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Positionera pilarna */
:deep(.swiper-button-prev) {
  left: 5px;
}
:deep(.swiper-button-next) {
  right: 5px;
}

/* Style för pagination-prickar */
:deep(.swiper-pagination-bullet) {
  background-color: black;
  opacity: 0.4;
  width: 8px;
  height: 8px;
}
:deep(.swiper-pagination-bullet-active) {
  background-color: black !important;
  border: solid 0.5px white;
  opacity: 1;
  width: 10px;
  height: 10px;
}
</style>
