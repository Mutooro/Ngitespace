<template>
  <nav id="mainNav" :class="{ 'scrolled': isScrolled }">
    <router-link to="/" class="nav-logo">
      <img src="/assets/img/ngite_space_logo.png" alt="Ngite Space">
      <span>Ngite Space</span>
    </router-link>
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/services">Services</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/beyco">BEYCO</router-link></li>
      <li><router-link to="/blog">Blog</router-link></li>
      <!-- <li><router-link to="/gallery">Gallery</router-link></li> -->
      <li><router-link to="/contact" class="nav-cta">Contact Us</router-link></li>
    </ul>
    <button class="nav-toggle" @click="toggleMobileMenu" aria-label="Menu">
      <i class="fas" :class="isMenuOpen ? 'fa-times' : 'fa-bars'" id="menuIcon"></i>
    </button>
  </nav>

  <div class="mobile-menu" :class="{ 'open': isMenuOpen }" id="mobileMenu">
    <router-link to="/" @click="isMenuOpen = false">Home</router-link>
    <router-link to="/about" @click="isMenuOpen = false">About</router-link>
    <router-link to="/services" @click="isMenuOpen = false">Services</router-link>
    <router-link to="/projects" @click="isMenuOpen = false">Projects</router-link>
    <router-link to="/beyco" @click="isMenuOpen = false">BEYCO</router-link>
    <router-link to="/blog" @click="isMenuOpen = false">Blog</router-link>
    <!-- <router-link to="/gallery" @click="isMenuOpen = false">Gallery</router-link> -->
    <router-link to="/contact" @click="isMenuOpen = false">Contact Us</router-link>
  </div>
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
  if (open) {
    document.documentElement.classList.add('no-scroll')
    document.body.classList.add('no-scroll')
  } else {
    document.documentElement.classList.remove('no-scroll')
    document.body.classList.remove('no-scroll')
  }
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 60
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
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
