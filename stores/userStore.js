import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserstore = defineStore("data", () => {
  const data = ref(null);
  const getData = async () => {
    try {
      const response = await axios.get("/db.json");
      data.value = response.data;
      console.log(data.value);
    } catch (error) {
      console.error(error);
    }
  };
  return { data, getData };
});
