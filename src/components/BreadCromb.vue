<script setup>
import { useRoute } from "vue-router";


    const route = useRoute();
    const category = route.params.category;
    const shop = route.params.shoptype;
</script>

<template>
    <div class="mt-5 ml-3">
        <nav class="flex" aria-label="Breadcrumb">
            <ol
                class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
            >
                <li
                    v-if="
                        route.path !== '/checkout' &&
                        route.path !== '/orderconfirmation'
                    "
                    class="inline-flex items-center"
                >
                    <router-link
                        v-if="
                            route.path !== '/checkout' &&
                            route.path !== '/orderconfirmation'
                        "
                        to="/"
                        class="inline-flex items-center text-sm font-medium text-black dark:text-gray-400 dark:hover:text-white ml-5"
                    >
                        <svg
                            class="w-3 h-3 me-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
                            />
                        </svg>
                        <p>Home</p>
                    </router-link>
                </li>

                <li
                    v-if="
                        route.path !== '/checkout' &&
                        route.path !== '/orderconfirmation'
                    "
                >
                    <div class="flex items-center">
                        <svg
                            class="w-[26px] h-[26px] text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 12H5m14 0-4 4m4-4-4-4"
                            />
                        </svg>
                    </div>
                </li>
                <li
                    v-if="
                        route.path !== '/checkout' &&
                        route.path !== '/orderconfirmation'
                    "
                >
                    <router-link
                        :to="`/shop/${shop}`"
                        class="inline-flex items-center text-sm font-medium text-black dark:text-gray-400 dark:hover:text-white"
                        ><div>
                            <p v-if="shop === 'womens_fashion'">dammode</p>
                            <p v-else>herrmode</p>
                        </div>
                    </router-link>
                </li>
                <!-- Kategori-länk -->
                <li
                    v-if="
                        route.path !== '/checkout' &&
                        route.path !== '/orderconfirmation'
                    "
                >
                    <div class="flex items-center">
                        <svg
                            class="w-[26px] h-[26px] text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 12H5m14 0-4 4m4-4-4-4"
                            />
                        </svg>

                        <span
                            class="inline-flex items-center text-sm font-medium text-black dark:text-gray-400 dark:hover:text-white ml-2"
                        >
                            <p>{{ category }}</p></span
                        >
                    </div>
                </li>
                <li>
                    <router-link
                        v-if="
                            route.path === '/checkout' ||
                            route.path === '/orderconfirmation'
                        "
                        to="/checkout"
                        class="inline-flex items-center text-sm font-medium text-black dark:text-gray-400 dark:hover:text-white"
                    >
                        <svg
                            class="w-[26px] h-[26px] text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 12h14M5 12l4-4m-4 4 4 4"
                            />
                        </svg>

                        <span
                            class="inline-flex items-center text-sm font-medium text-black dark:text-gray-400 dark:hover:text-white ml-2"
                        >
                            <p>Tillbaka till varukorgen</p></span
                        >
                    </router-link>
                </li>
            </ol>
        </nav>
    </div>

</template>
<style scoped></style>
