<template>
  <main class="legal-page">
    <section class="page-hero">
      <div class="page-hero-bg" id="heroBg"></div>
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <Breadcrumbs />
        <h1>Cookie <em>Settings</em></h1>
      </div>
    </section>

    <section class="legal-content">
      <div class="legal-container">
        <h2>Manage Your Cookie Preferences</h2>
        <p class="intro-text">Choose which types of cookies you want to allow on our website. Essential cookies are required for the website to function properly.</p>

        <div class="cookie-settings-form">
          <div class="cookie-option" v-for="option in cookieOptions" :key="option.key">
            <div class="cookie-option-header">
              <div class="cookie-option-info">
                <h3>{{ option.title }}</h3>
                <p>{{ option.description }}</p>
              </div>
              <label class="toggle-switch" :class="{ disabled: option.required }">
                <input
                  type="checkbox"
                  :checked="preferences[option.key]"
                  :disabled="option.required"
                  @change="updatePreference(option.key, $event.target.checked)"
                >
                <span class="slider"></span>
              </label>
            </div>
          </div>
        </div>

        <div class="cookie-actions">
          <button @click="savePreferences" class="btn-primary">Save Preferences</button>
          <button @click="acceptAll" class="btn-secondary">Accept All</button>
          <button @click="rejectAll" class="btn-secondary">Reject All</button>
        </div>

        <div class="saved-message" v-if="showSavedMessage">
          <i class="fas fa-check-circle"></i> Preferences saved successfully!
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import Breadcrumbs from '../components/Breadcrumbs.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const preferences = ref({
  essential: true,
  analytics: false,
  marketing: false
})

const showSavedMessage = ref(false)

const cookieOptions = [
  {
    key: 'essential',
    title: 'Essential Cookies',
    description: 'Required for the website to function properly. These cannot be disabled.',
    required: true
  },
  {
    key: 'analytics',
    title: 'Analytics Cookies',
    description: 'Help us understand how visitors interact with our website by collecting information anonymously.',
    required: false
  },
  {
    key: 'marketing',
    title: 'Marketing Cookies',
    description: 'Used to track visitors across websites to display relevant advertisements and measure campaign effectiveness.',
    required: false
  }
]

const updatePreference = (key, value) => {
  preferences.value[key] = value
}

const savePreferences = () => {
  localStorage.setItem('cookiePreferences', JSON.stringify(preferences.value))
  localStorage.setItem('cookieConsent', 'custom')

  if (preferences.value.analytics || preferences.value.marketing) {
    window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: 'accepted' }))
  } else {
    window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: 'rejected' }))
  }

  showSavedMessage.value = true
  setTimeout(() => {
    showSavedMessage.value = false
  }, 3000)
}

const acceptAll = () => {
  preferences.value = {
    essential: true,
    analytics: true,
    marketing: true
  }
  savePreferences()
}

const rejectAll = () => {
  preferences.value = {
    essential: true,
    analytics: false,
    marketing: false
  }
  savePreferences()
}

onMounted(() => {
  const saved = localStorage.getItem('cookiePreferences')
  if (saved) {
    preferences.value = JSON.parse(saved)
  }
})
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
}

.legal-content {
  padding: 60px 20px;
  max-width: 900px;
  margin: 0 auto;
}

.legal-container {
  line-height: 1.8;
}

.intro-text {
  color: #666;
  margin-bottom: 30px;
  font-size: 1.1rem;
}

.cookie-settings-form {
  margin-bottom: 30px;
}

.cookie-option {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 16px;
}

.cookie-option-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}

.cookie-option-info {
  flex: 1;
}

.cookie-option-info h3 {
  color: var(--forest);
  margin-bottom: 8px;
  font-size: 1.2rem;
}

.cookie-option-info p {
  color: #666;
  margin: 0;
  font-size: 0.95rem;
}

.toggle-switch {
  position: relative;
  width: 60px;
  height: 32px;
  flex-shrink: 0;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-switch.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.3s;
  border-radius: 32px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.3s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: var(--forest);
}

input:checked + .slider:before {
  transform: translateX(28px);
}

.toggle-switch.disabled .slider {
  background-color: var(--forest);
}

.cookie-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.btn-primary,
.btn-secondary {
  padding: 12px 28px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.btn-primary {
  background: var(--gold);
  color: var(--forest);
}

.btn-primary:hover {
  background: #b8943d;
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: var(--forest);
  border: 2px solid var(--forest);
}

.btn-secondary:hover {
  background: var(--forest);
  color: #fff;
}

.saved-message {
  margin-top: 20px;
  padding: 16px 20px;
  background: #d4edda;
  color: #155724;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
}

.saved-message i {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .cookie-option-header {
    flex-direction: column;
  }

  .toggle-switch {
    align-self: flex-start;
  }

  .cookie-actions {
    flex-direction: column;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
  }
}
</style>
