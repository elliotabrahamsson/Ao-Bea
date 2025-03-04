<script setup></script>

<template>
  <div class="footer-container">
    <footer class="bg-white dark:bg-gray-900">
      <div class="mx-auto w-full max-w-screen-xl">
        <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <img
              class="footer-icon"
              src="/src/assets/footer/Icons/Ao-bea-icon2.png"
              alt="brand icon"
            />

            <ul class="text-black-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <RouterLink to="/about" class="hover:underline">Om Ao Bea</RouterLink>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Kundtjänst</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Kontakt</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Leverans</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Returer</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Storleksguide</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">FAQ</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Mitt konto</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="social-media-container">
          <ul class="social-media-ul">
            <li class="social-media-item">
              <img
                src="/src/assets/footer/Icons/fb-icon.png"
                alt="facebook icon"
              />
            </li>
            <li class="social-media-item">
              <img
                src="/src/assets/footer/Icons/ig-icon.png"
                alt="instagram icon"
              />
            </li>
            <li class="social-media-item">
              <img
                src="/src/assets/footer/Icons/linkedin-icon.png"
                alt="linkedin icon"
              />
            </li>
            <li class="social-media-item">
              <img
                src="/src/assets/footer/Icons/youtube-icon.png"
                alt="youtube icon"
              />
            </li>
          </ul>
        </div>
        <div
          class="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between"
        >
          <span class="text-sm text-black-500 dark:text-gray-300 sm:text-center"
            >© 2025 <a href="">Ao Bea™</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.footer-container {
  min-width: 100%;
  margin-bottom: 1rem;
}

.footer-icon {
  width: 85px;
  height: 85px;
  margin-bottom: 2rem;
}

.social-media-ul {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.social-media-item {
  margin: 1rem;
}
</style>
