import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "../routes/routes.js";
import "./style.css";
import App from "./App.vue";

createApp(App).use(router).use(createPinia()).mount("#app");
