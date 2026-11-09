<template>
  <div class="app-container">
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <Navbar />

    <div id="main-content" tabindex="-1">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>

    <Footer />
    <WhatsAppFloat />
    <CookieConsent />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import CookieConsent from './components/CookieConsent.vue'
import WhatsAppFloat from './components/WhatsAppFloat.vue'
import { usePageSeo } from './composables/usePageSeo'

usePageSeo()
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Ensure footer stays at bottom if content is short */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

#main-content:focus {
  outline: none;
}
</style>
