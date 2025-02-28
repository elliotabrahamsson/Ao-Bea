<script setup>

</script>

<template>
    <div class="women">
        <h2>Shop Women</h2>
        
    </div>
    <div class="men">
        <h2>Shop Men</h2>
    </div>
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

    .women {
        background-color: #fde8e8;
        text-align: left;
    }
    .women img {
        justify-content: end;
    }
    .men {
        background-color: #b1d3ff;
        text-align: right;
    }
</style>
