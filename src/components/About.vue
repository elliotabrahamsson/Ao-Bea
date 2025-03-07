<script setup>
</script>

<template>
  <div class="text-center about-container">
    <h1 class="mt-4">About</h1>
    <p class="text-left text-pretty text mt-4 ml-3">
      <strong>AO BEA</strong> är ett skandinaviskt modevarumärke som förenar stilren design med
      tidlös elegans. Vi skapar kläder för både herr och dam – plagg som
      kombinerar minimalistisk estetik med högkvalitativa material och
      genomtänkta detaljer. Välkommen till <strong>AO BEA</strong> – Zalando fast bättre.
    </p>
    <h2 class="text-center mt-10">Vilka är vi?</h2>
    <div class="content-container">
     <a href="https://www.linkedin.com/in/antonia-noaksson-20ba132b1/" target="_blank">
      <img
        id="antonia-picture"
        class="relative mt-4"
        src="/src/assets/about-team-img/Antonia.jpeg"
        alt="Team-member-picture"
      />
     </a>
      <div class="letter-overlay-antonia">
        <h2 class="text-white">A</h2>
      </div>

      <img
        id="oliver-picture"
        class="relative mt-4"
        src="/src/assets/about-team-img/Oliver.jpg"
        alt="Team-member-picture"
      />
      <div class="letter-overlay-oliver">
        <h2 class="text-white">O</h2>
      </div>

      <img
        id="brian-picture"
        class="relative mt-4"
        src="/src/assets/about-team-img/Brian.jpg"
        alt="Team-member-picture"
      />
      <div class="letter-overlay-brian">
        <h2 class="text-white">B</h2>
      </div>

      <img
        id="elliot-picture"
        class="relative mt-4"
        src="/src/assets/about-team-img/Elliot.jpg"
        alt="Team-member-picture"
      />
      <div class="letter-overlay-elliot">
        <h2 class="text-white">E</h2>
      </div>

      <img
        id="alexander-picture"
        class="relative mt-4"
        src="/src/assets/about-team-img/Alexander.jpg"
        alt="Team-member-picture"
      />
      <div class="letter-overlay-alexander">
        <h2 class="text-white">A</h2>
      </div>

      <p class="text-pretty text-start mt-4 ml-3 mb-8 text-xl">
        Vi är Antonia, Oliver, Brian, Elliot och Alexander. Tillsammans har vi
        skapat och utvecklat AO BEA.
      </p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 30px;
}

h2 {
  font-size: 30px;
}

.relative {
    position: relative;
}

.letter-overlay-antonia {
  position: absolute;
  top:160px;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.letter-overlay-antonia h2 {
    font-size: 70px;
    /* background-color: black; */
}

.letter-overlay-oliver {
  position: absolute;
  top:800px;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.letter-overlay-oliver h2 {
    font-size: 70px;
    /* background-color: black; */
}

.letter-overlay-brian {
  position: absolute;
  top:1450px;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.letter-overlay-brian h2 {
    font-size: 70px;
   /*  background-color: black; */
}

.letter-overlay-elliot {
  position: absolute;
  top:2120px;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.letter-overlay-elliot h2 {
    font-size: 70px;
    /* background-color: black; */
}

.letter-overlay-alexander {
  position: absolute;
  top:2800px;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.letter-overlay-alexander h2 {
    font-size: 70px;
   /*  background-color: black;
    width: 85px; */
}

</style>
