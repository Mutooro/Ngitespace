<template>
  <nav id="mainNav" :class="{ 'scrolled': isScrolled }" aria-label="Main">
    <router-link to="/" class="nav-logo">
      <img src="/assets/img/ngite_space_logo.png" alt="" width="391" height="360">
      <span>Ngite Space</span>
    </router-link>
    <ul class="nav-links">
      <!-- <li><router-link to="/">Home</router-link></li> -->
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/services">Services</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/beyco">BEYCO</router-link></li>
      <li><router-link to="/blog">Blog</router-link></li>
      <li><router-link to="/contact" class="nav-cta">Contact Us</router-link></li>
    </ul>
    <button class="nav-toggle" @click="toggleMobileMenu"
      :aria-expanded="isMenuOpen ? 'true' : 'false'" aria-controls="mobileMenu"
      :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'">
      <i class="fas" :class="isMenuOpen ? 'fa-times' : 'fa-bars'" id="menuIcon" aria-hidden="true"></i>
    </button>

    <div class="mobile-menu" :class="{ 'open': isMenuOpen }" id="mobileMenu">
      <router-link to="/" @click="isMenuOpen = false">Home</router-link>
      <router-link to="/about" @click="isMenuOpen = false">About</router-link>
      <router-link to="/services" @click="isMenuOpen = false">Services</router-link>
      <router-link to="/projects" @click="isMenuOpen = false">Projects</router-link>
      <router-link to="/beyco" @click="isMenuOpen = false">BEYCO</router-link>
      <router-link to="/blog" @click="isMenuOpen = false">Blog</router-link>
      <router-link to="/contact" @click="isMenuOpen = false">Contact Us</router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Disable body scrolling when mobile menu is open
watch(isMenuOpen, (open) => {
  document.documentElement.classList.toggle('no-scroll', open)
  document.body.classList.toggle('no-scroll', open)
})

let scrollTicking = false
const handleScroll = () => {
  if (scrollTicking) return
  scrollTicking = true
  requestAnimationFrame(() => {
    isScrolled.value = window.scrollY > 60
    scrollTicking = false
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.documentElement.classList.remove('no-scroll')
  document.body.classList.remove('no-scroll')
})
</script>

<style scoped>
/* Scoped styles will be added here, or we can use global styles */
</style>
