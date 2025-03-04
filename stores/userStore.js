import axios from "axios";
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserstore = defineStore("data", () => {
  const data = ref(null);

  // Hämta data från db.json
  const getData = async () => {
    try {
      const response = await axios.get("/db.json");
      data.value = response.data; // Data kan vara en JSON-struktur med kategorier
      console.log(data.value);
    } catch (error) {
      console.error(error);
    }
  };

  // Getter: Plocka ut en produkt per kategori
  const uniqueProductsByCategory = computed(() => {
    if (!data.value || !data.value.mens_fashion) return {}; // Om data saknas, returnera tomt objekt

    return data.value.mens_fashion.reduce((acc, product) => {
      if (!acc[product.Category]) {
        acc[product.Category] = product; // Tar första produkten i varje kategori
      }
      return acc;
    }, {});
  });

  return { data, getData, uniqueProductsByCategory };
});
