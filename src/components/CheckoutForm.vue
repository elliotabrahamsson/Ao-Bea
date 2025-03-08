<script setup>
import { ref } from "vue"

const content = ref(null)

const scrollDown = () => {
    if(content.value) {
        content.value.scrollIntoView({ behavior: "smooth"})
    }
}
</script>

<template>
    <!-- Leverans -->
    <h1 class="ml-6 mt-4">LEVERANS</h1>
    <div class="form-container">
        <form>
            <div class="mb-5">
                <div class="first-row-container grid grid-cols-2 gap-3">
                    <div class="form-group">
                        <label for="base-input"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Förnamn</label>
                        <input type="text" id="name-input"
                            class="bg-gray-50 border border-black text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div class="form-group">
                        <label for="base-input"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Efternamn</label>
                        <input type="text" id="name-input"
                            class="bg-gray-50 border border-black text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                </div>
                <div class="form-group mt-3">
                    <label for="base-input"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gatunamn och nummer</label>
                    <input type="text" id="name-input"
                        class="bg-gray-50 border border-black text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
                <div class="third-row-container grid grid-cols-2 gap-3 mt-3">
                    <div class="form-group">
                        <label for="base-input"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Postnummer</label>
                        <input type="text" id="name-input" placeholder="112 12"
                            class="bg-gray-50 border border-black text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div class="form-group">
                        <label for="base-input"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stad</label>
                        <input type="text" id="name-input"
                            class="bg-gray-50 border border-black text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                </div>
                <div class="form-group mt-3">
                    <label for="base-input"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefonnummer</label>
                    <input type="text" id="name-input" placeholder="+46"
                        class="bg-gray-50 border border-black text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
                <div class="form-group mt-3">
                    <label for="base-input"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-postadress</label>
                    <input type="text" id="name-input"
                        class="bg-gray-50 border border-black text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
                <button @click="scrollDown" type="button"
                    class="text-white bg-[#403d37] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[4px] text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-8 h-[44px]">
                    <span>
                        <h2>Fortsätt till betalning</h2>
                    </span></button>
            </div>
        </form>
    </div>
    <!-- Betalningsmetod -->
    <div ref="content" class="target-scroll"></div>
    <h3 class="ml-6 mt-6 dark:text-white">Välj Betalningsmetod</h3>
    <div class="pay-method-container">
        <ul class=" w-90 p-1 dark:text-white">
            <li class="w-full">
                <div class="flex items-center ps-3 p-2">
                    <input id="list-radio-license" type="radio" value="" name="list-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for="list-radio-license"
                        class="w-full py-3 ms-2 font-semibold text-[16px] text-gray-900 dark:text-gray-300">Kredit</label>
                    <div class="icon-container flex flex-row">
                        <img src="/src/assets/checkout-icons/visa.png" alt="icon of visa card">
                        <img src="/src/assets/checkout-icons/mastercard.png" alt="icon of mastercard">
                    </div>
                </div>
            </li>
            <li class="w-full dark:border-gray-600">
                <div class="flex items-center ps-3 p-2">
                    <input id="list-radio-id" type="radio" value="" name="list-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for="list-radio-id"
                        class="w-full py-3 ms-2 font-semibold text-gray-900 dark:text-gray-300 text-[16px]">Klarna</label>
                    <div class="icon-container">
                        <img src="/src/assets/checkout-icons/klarna.png" alt="icon of klarna">
                    </div>
                </div>
            </li>
            <li class="w-full  dark:border-gray-600">
                <div class="flex items-center ps-3 p-2">
                    <input id="list-radio-military" type="radio" value="" name="list-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for="list-radio-military"
                        class="w-full py-3 ms-2  font-semibold text-gray-900 dark:text-gray-300 text-[16px]">Swish</label>
                    <div class="icon-container">
                        <img src="/src/assets/checkout-icons/swish.png" alt="icon of swish" class="ml-auto">
                    </div>
                </div>
            </li>
        </ul>

        <div class="klarna-container mt-6">
            <h4>Dina uppgifter:</h4>
            <div class="form-group mt-3">
            <label for="base-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
            <input type="text" id="name-input" placeholder="Ange din E-post"
                class="bg-gray-50 border border-black text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div class="form-group mt-3">
            <label for="base-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
            <input type="text" id="name-input" placeholder="Postnummer"
                class="bg-gray-50 border border-black text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
        </div>
        <div class="payment-methods-bar-container flex flex-row mt-12 mb-6  ">
            <img src="/src/assets/checkout-icons/payment-bar/mastercard.png" alt="icon of mastercard">
            <img src="/src/assets/checkout-icons/payment-bar/visa.png" alt="icon of visa">
            <img src="/src/assets/checkout-icons/payment-bar/Klarna.png" alt="icon of klarna">
            <img src="/src/assets/checkout-icons/payment-bar/GooglePay.png" alt="icon of google pay">
            <img src="/src/assets/checkout-icons/payment-bar/Paypal.png" alt="icon of paypal">
            <img src="/src/assets/checkout-icons/payment-bar/ApplePay.png" alt="icon of apple pay">
        </div>

        <!-- Slutför köp-knapp -->
        <button type="submit"
            class="text-white bg-[#403d37] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[4px] text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-8 h-[44px]">
            <span>
                <h2>Slutför köp</h2>
            </span></button>
    </div>
</template>

<style scoped>
h1 {
    font-size: 20px;
    padding: 0.5rem;
}

h2 {
    font-size:medium;
}

h3 {
    font-size: 20px;
    padding: 0.5rem;
}

form, p {
    font-family: "Merriweather Sans", sans-serif;
    font-weight: lighter;
}

label {
    font-family: "Merriweather Sans", sans-serif;
}

input {
    height: 44px;
    font-family: "Merriweather Sans", sans-serif;
}

.form-container {
    padding: 2rem;
}

.first-row-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.icon-container {
    display: flex;
    justify-content: flex-end;
}

.pay-method-container {
    padding: 2rem;
}

</style>
