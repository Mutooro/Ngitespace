<template>
  <footer>
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="/assets/img/ngite_space_logo.png" alt="Ngite Space Limited" width="391" height="360" loading="lazy">
        <p>We're committed to blending agribusiness with environmental awareness and action. Join us in making a
          difference for coffee and cocoa communities across Uganda.</p>
        <div class="social-links">
          <a href="https://instagram.com/ngite_space" class="social-link" target="_blank" rel="noopener"
            aria-label="Ngite Space on Instagram"><i class="fab fa-instagram" aria-hidden="true"></i></a>
          <a href="https://x.com/ngitespace" class="social-link" target="_blank" rel="noopener"
            aria-label="Ngite Space on X"><i class="fab fa-twitter" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/company/ngite-space-limited" class="social-link" target="_blank" rel="noopener"
            aria-label="Ngite Space on LinkedIn"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
        </div>
      </div>
      <div class="footer-col">
        <h2>Quick Links</h2>
        <ul class="footer-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/projects">Projects</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
          <li><router-link to="/gallery">Gallery</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
      <div class="footer-col">
        <h2>Projects</h2>
        <ul class="footer-links">
          <li><router-link to="/projects">Ngite Climate Auditorium</router-link></li>
          <li><router-link to="/projects">Women for Climate</router-link></li>
          <li><router-link to="/projects">Responsible Waste Disposal</router-link></li>
          <li><router-link to="/projects">Food Security Initiative</router-link></li>
        </ul>
      </div>
      <div class="footer-col">
        <h2>Contact Us</h2>
        <div class="footer-contact">
          <div class="contact-item"><i class="fas fa-map-marker-alt" aria-hidden="true"></i><span>P.O Box 188312, Kampala, Uganda</span>
          </div>
          <div class="contact-item"><i class="fas fa-phone" aria-hidden="true"></i><a href="tel:+256763965806">+256 763 965 806</a></div>
          <div class="contact-item"><i class="fas fa-phone" aria-hidden="true"></i><a href="tel:+256393002153">+256 393 002 153</a></div>
         
          <div class="contact-item"><i class="fas fa-envelope" aria-hidden="true"></i><a
              href="mailto:info@ngitespace.com">info@ngitespace.com</a></div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© {{ currentYear }} Ngite Space Limited. All rights reserved.</p>
      <div class="footer-legal">
        <router-link to="/privacy-policy">Privacy Policy</router-link>
        <router-link to="/terms-and-conditions">Terms & Conditions</router-link>
        <router-link to="/cookies-policy">Cookies Policy</router-link>
      </div>
      <!-- <p>Developed by <a href="https://mutooro.xyz" target="_blank">Mutooro</a></p> -->
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
/* Scoped styles can be added here */
</style>
