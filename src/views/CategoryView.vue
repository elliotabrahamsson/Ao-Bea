<script setup>
    import SelectedCategory from '../components/SelectedCategory.vue';
    import Navbar from '../components/Navbar.vue';
    import Footer from '../components/Footer.vue';
    import SearchbarComp from '../components/SearchbarComp.vue';
    import BreadCromb from '../components/BreadCromb.vue';

    import { useRoute } from 'vue-router';

    const route = useRoute();
</script>
<template>
    <SearchbarComp />
    <BreadCromb />
    <div>
        <SelectedCategory
            :selectedCategory="route.params.category"
            :selectedShop="route.params.shoptype"
        />
    </div>
    <Footer />
    <Navbar />
</template>
<style scoped></style>
