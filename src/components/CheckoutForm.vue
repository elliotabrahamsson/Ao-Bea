<script setup>

</script>

<template>
    <h1 class="ml-6 mt-2">LEVERANS</h1>
    <div class="form-container">
        <form action="">
            <div class="mb-5">
                <div class="first-row-container grid grid-cols-2 gap-3">
                    <div class="form-group">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Förnamn</label>
                        <input type="text" id="name-input" class="bg-gray-50 border border-black text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div class="form-group">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Efternamn</label>
                        <input type="text" id="name-input" class="bg-gray-50 border border-black text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                </div>
                <div class="form-group mt-3">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gatunamn och nummer</label>
                        <input type="text" id="name-input" class="bg-gray-50 border border-black text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
                <div class="third-row-container grid grid-cols-2 gap-3 mt-3">
                    <div class="form-group">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Postnummer</label>
                        <input type="text" id="name-input" placeholder="112 12" class="bg-gray-50 border border-black text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div class="form-group">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stad</label>
                        <input type="text" id="name-input" class="bg-gray-50 border border-black text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                </div>
                <div class="form-group mt-3">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefonnummer</label>
                        <input type="text" id="name-input" placeholder="+46" class="bg-gray-50 border border-black text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
                <div class="form-group mt-3">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-postadress</label>
                        <input type="text" id="name-input" class="bg-gray-50 border border-black text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
                <button type="submit" class="text-white bg-[#403d37] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[4px] text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-8 h-[44px]">
                <span><h2>Fortsätt till betalning</h2></span></button>
            </div>
        </form>
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

input {
    height: 44px;
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

</style>
