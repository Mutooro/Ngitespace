<template>
  <transition name="cookie-slide">
    <div v-if="showConsent" class="cookie-consent" role="region" aria-label="Cookie notice">
      <div class="cookie-content">
        <div class="cookie-text">
          <h2>🍪 Cookie Notice</h2>
          <p>We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.</p>
        </div>
        <div class="cookie-buttons">
          <button @click="rejectCookies" class="cookie-btn reject">Reject</button>
          <button @click="acceptCookies" class="cookie-btn accept">Accept All</button>
          <router-link to="/cookie-settings" class="cookie-btn settings">Cookie Settings</router-link>
        </div>
        <button @click="dismiss" class="cookie-close" aria-label="Close cookie notice">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showConsent = ref(false)

const acceptCookies = () => {
  localStorage.setItem('cookieConsent', 'accepted')
  localStorage.setItem('cookiePreferences', JSON.stringify({
    essential: true,
    analytics: true,
    marketing: true
  }))
  showConsent.value = false
  enableCookies()
}

const rejectCookies = () => {
  localStorage.setItem('cookieConsent', 'rejected')
  localStorage.setItem('cookiePreferences', JSON.stringify({
    essential: true,
    analytics: false,
    marketing: false
  }))
  showConsent.value = false
  disableNonEssentialCookies()
}

const dismiss = () => {
  showConsent.value = false
}

const enableCookies = () => {
  // Dispatch event for scripts listening to consent changes
  window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: 'accepted' }))
}

const disableNonEssentialCookies = () => {
  // Non-essential cookies and third-party scripts stay disabled
}

onMounted(() => {
  const consent = localStorage.getItem('cookieConsent')
  if (!consent) {
    // Show consent banner on first visit
    setTimeout(() => {
      showConsent.value = true
    }, 1000)
  } else {
    // Apply stored preferences
    const preferences = JSON.parse(localStorage.getItem('cookiePreferences') || '{}')
    if (consent === 'accepted') {
      enableCookies()
    } else {
      disableNonEssentialCookies()
    }
  }
})
</script>

<style scoped>
.cookie-slide-enter-active,
.cookie-slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.cookie-slide-enter-from,
.cookie-slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.cookie-consent {
  position: fixed;
  bottom: 24px;
  right: 24px;
  left: auto;
  width: min(400px, calc(100vw - 48px));
  background: rgba(26, 61, 43, 0.98);
  backdrop-filter: blur(12px);
  padding: 22px 24px;
  z-index: 1000;
  border: 1px solid rgba(201, 168, 76, 0.35);
  border-radius: 12px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
}

.cookie-content {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 14px;
  position: relative;
}

.cookie-text {
  padding-right: 24px;
}

.cookie-text h2 {
  color: var(--gold);
  font-size: 1.1rem;
  margin-bottom: 8px;
  font-family: var(--heading-font);
}

.cookie-text p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.5;
}

.cookie-buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: stretch;
}

.cookie-btn {
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;
  white-space: nowrap;
}

.cookie-btn.accept {
  background: var(--gold);
  color: var(--forest);
  border: none;
}

.cookie-btn.accept:hover {
  background: #b8943d;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(201, 168, 76, 0.4);
}

.cookie-btn.reject {
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.cookie-btn.reject:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.cookie-btn.settings {
  background: transparent;
  color: var(--sage);
  border: 1px solid var(--sage);
}

.cookie-btn.settings:hover {
  background: var(--sage);
  color: var(--forest);
}

.cookie-close {
  position: absolute;
  top: 0;
  right: 0;
  background: rgba(26, 61, 43, 0.9);
  border: 1px solid var(--gold);
  color: var(--gold);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.cookie-close:hover {
  background: var(--gold);
  color: var(--forest);
}

@media (max-width: 768px) {
  .cookie-consent {
    bottom: 80px;
    right: 16px;
    width: calc(100vw - 32px);
  }
}
</style>
