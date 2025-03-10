<script setup>
</script>

<template>
  <div class="text-center about-container">
    <h1 class="mt-4">About</h1>
    <p class="text-left text-pretty text mt-4 ml-3 p-5">
      <strong>AO BEA</strong> är ett skandinaviskt modevarumärke som förenar stilren design med
      tidlös elegans. Vi skapar kläder för både herr och dam – plagg som
      kombinerar minimalistisk estetik med högkvalitativa material och
      genomtänkta detaljer.
      <br>
      <br>
      Välkommen till <strong>AO BEA</strong> – Zalando fast bättre.
    </p>
    <h2 class="text-center mt-10">Vilka är vi?</h2>
    <div class="content-container">
      <img
        id="antonia-picture"
        class="relative mt-4"
        src="/src/assets/about-team-img/Antonia.jpeg"
        alt="Team-member-picture"
      />
      <div class="letter-overlay-antonia">
        <a href="https://www.linkedin.com/in/antonia-noaksson-20ba132b1/" target="_blank"><h2 class="text-[var(--bg-women)] letter-vertical"><span class="text-[50px]">A</span><span class="font-[merriweather-sans] font-light text-[36px]" >ntonia</span></h2> </a>
      </div>

      <img
        id="oliver-picture"
        class="relative mt-4"
        src="/src/assets/about-team-img/Oliver.jpg"
        alt="Team-member-picture"
      />
      <div class="letter-overlay-oliver">
        <a href="https://www.linkedin.com/in/oliverfernstrom/" target="_blank">
          <h2 class="text-[var(--bg-men)] letter-vertical"><span class="text-[50px]">O</span><span class="font-[merriweather-sans] font-light text-[36px]" >liver</span></h2>
        </a>
      </div>

      <img
        id="brian-picture"
        class="relative mt-4"
        src="/src/assets/about-team-img/Brian.jpg"
        alt="Team-member-picture"
      />
      <div class="letter-overlay-brian">
        <a href="https://www.linkedin.com/in/brian-tivar-castillo/" target="_blank" >
          <h2 class="text-[var(--bg-women)] letter-vertical"><span class="text-[50px]">B</span><span class="font-[merriweather-sans] font-light text-[36px]" >rian</span></h2>
        </a>
      </div>

      <img
        id="elliot-picture"
        class="relative mt-4"
        src="/src/assets/about-team-img/Elliot.jpg"
        alt="Team-member-picture"
      />
      <div class="letter-overlay-elliot">
        <a href="https://www.linkedin.com/in/elliot-abrahamsson-a8558a267/" target="_blank">
          <h2 class="text-[var(--bg-men)] letter-vertical"><span class="text-[50px]">E</span><span class="font-[merriweather-sans] font-light text-[36px]" >lliot</span></h2>
        </a>
      </div>

      <img
        id="alexander-picture"
        class="relative mt-4"
        src="/src/assets/about-team-img/Alexander.jpg"
        alt="Team-member-picture"
      />
      <div class="letter-overlay-alexander">
        <a href="https://www.linkedin.com/in/alexanderahlstr%C3%B6m/" target="_blank">
          <h2 class="text-[var(--bg-women)] letter-vertical"><span class="text-[50px]">A</span><span class="font-[merriweather-sans] font-light text-[36px]" >lexander</span></h2>
        </a>
      </div>

      <p class="text-pretty text-start mt-4 ml-3 mb-8 text-xl p-6">
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

/* För responsiviteten behöver man anpassa overlaysen med media queries. */
.relative {
    position: relative;
}

.letter-overlay-antonia {
  position: absolute;
  top:183px;
  right: 180px;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.letter-overlay-antonia h2 {
    font-size: 30px;
    background-color: rgba(0, 0, 0, 0.6);
}

.letter-overlay-oliver {
  position: absolute;
  top:609px;
  right: 180px;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.letter-overlay-oliver h2 {
  font-size: 30px;
  background-color: rgba(0, 0, 0, 0.6);
}

.letter-overlay-brian {
  position: absolute;
  top:1249px;
  right: 180px;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.letter-overlay-brian h2 {
  font-size: 30px;
  background-color: rgba(0, 0, 0, 0.6);
}

.letter-overlay-elliot {
  position: absolute;
  top:1930px;
  right: 180px;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.letter-overlay-elliot h2 {
  font-size: 30px;
  background-color: rgba(0, 0, 0, 0.6);
}

.letter-overlay-alexander {
  position: absolute;
  top:2651px;
  right: 180px;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.letter-overlay-alexander h2 {
  font-size: 30px;
  background-color: rgba(0, 0, 0, 0.6);
}

.letter-vertical {
  writing-mode: vertical-lr;
  text-orientation: upright;
}
</style>
