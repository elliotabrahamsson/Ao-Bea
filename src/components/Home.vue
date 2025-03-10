<script setup></script>

<template>
  <RouterLink to="/shop/womens_fashion">
    <div class="women">
      <h2>Dammode</h2>
    </div>
    <div class="main-container">
      <img
        class="logo"
        src="/src/assets/footer/Icons/Ao-bea-icon2.png"
        alt="Ao Bea logotype"
      />
    </div>
  </RouterLink>

  <RouterLink to="/shop/mens_fashion">
    <div class="men">
      <h2>Herrmode</h2>
    </div>
  </RouterLink>
</template>
<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.women,
.men {
  display: flex;
  flex-direction: column;
  height: 41vh;
}
h2 {
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  height: 100%;
  align-items: center;
  justify-content: end;
}
.women {
  background-color: var(--bg-women);
  background-image: url("/src/assets/main-img/arketwomen.jpg");
  background-repeat: no-repeat;
  background-size: 230px 300px;
  background-position-x: 90%;
  background-position-y: 50%;
  text-align: left;
  justify-content: center;
}
.women h2 {
  margin-left: 3%;
  justify-content: start;
}
.men {
  background-color: var(--bg-men);
  background-image: url("/src/assets/main-img/arketmen.jpg");
  background-repeat: no-repeat;
  background-size: 230px 300px;
  background-position-x: 30px;
  background-position-y: 40px;
}
.men h2 {
  margin-right: 0.5rem;
}
.logo {
  position: absolute;
  z-index: 2;
  width: 100px;
  height: 100px;
}
</style>
