<template>
  <main class="donate-page">
    <!-- Reading progress bar -->
    <div class="reading-progress" :style="{ width: scrollProgress + '%' }"></div>

    <!-- PAGE HERO -->
    <section class="page-hero">
      <div class="page-hero-bg" id="heroBg"></div>
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <ol class="breadcrumb">
          <li><router-link to="/">Home</router-link></li>
          <li class="sep">Donate</li>
        </ol>
        <h1>Support Our <em>Mission</em></h1>
        <p>Help us build climate resilience and greener value chains for coffee &amp; cocoa communities</p>
      </div>
    </section>

    <!-- IMPACT STATS -->
    <div class="impact-strip" ref="impactRef">
      <div v-for="stat in impactStats" :key="stat.label" class="impact-item">
        <span class="impact-num">{{ stat.displayValue }}<span v-if="stat.suffix">{{ stat.suffix }}</span></span>
        <span class="impact-label">{{ stat.label }}</span>
      </div>
    </div>

    <!-- DONATE SECTION -->
    <section class="donate-section">
      <div class="donate-left">
        <span class="section-label">Make a Difference</span>
        <h2 class="section-title">Your Contribution <em>Changes Lives</em></h2>
        <p class="body-text">
          Every donation directly supports smallholder coffee and cocoa farmers in building climate resilience,
          accessing better markets, and securing sustainable livelihoods for their families.
        </p>

        <div class="donation-uses">
          <div v-for="use in donationUses" :key="use.title" class="use-item">
            <div class="use-icon"><i :class="use.icon"></i></div>
            <div class="use-text">
              <strong>{{ use.title }}</strong>
              <span>{{ use.description }}</span>
            </div>
          </div>
        </div>

        <div class="trust-badge">
          <i class="fa fa-shield"></i>
          <div>
            <strong>Secure &amp; Trusted</strong>
            <span>Your donation is processed securely. We are a registered social enterprise committed to full transparency.</span>
          </div>
        </div>
      </div>

      <div class="donate-right">
        <div class="form-card">
          <div class="form-card-header">
            <i class="fas fa-hand-holding-heart"></i>
            <h3>Donation Form</h3>
            <p>Fill in the form below to complete your donation</p>
          </div>
          <div class="form-container" style="padding: 24px;">
            <form @submit.prevent="submitForm" class="custom-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName">First Name *</label>
                  <input type="text" id="firstName" v-model="form.firstName" required placeholder="Jane" />
                </div>
                <div class="form-group">
                  <label for="lastName">Last Name *</label>
                  <input type="text" id="lastName" v-model="form.lastName" required placeholder="Doe" />
                </div>
              </div>
              
              <div class="form-group">
                <label for="email">Email Address *</label>
                <input type="email" id="email" v-model="form.email" required placeholder="jane@example.com" />
              </div>
              
              <div class="form-group">
                <label for="amount">Donation Amount (USD) *</label>
                <input type="number" id="amount" v-model="form.amount" required min="1" placeholder="e.g. 50" />
              </div>
              
              <div class="form-group">
                <label for="project">Project of Choice *</label>
                <select id="project" v-model="form.project" required>
                  <option value="" disabled>Select a project focus...</option>
                  <option value="General Support">General Support (Where it's needed most)</option>
                  <option value="Climate Adaptation">Climate Adaptation</option>
                  <option value="Market Access">Market Access</option>
                  <option value="Gender Equity">Gender Equity</option>
                  <option value="Research & Advocacy">Research & Advocacy</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Message (Optional)</label>
                <textarea id="message" v-model="form.message" placeholder="Leave a message with your donation..." rows="4"></textarea>
              </div>
              
              <button type="submit" class="btn-primary submit-btn" :disabled="isSubmitting">
                <span>{{ isSubmitting ? 'Processing...' : 'Complete Donation' }}</span>
                <i v-if="!isSubmitting" class="fas fa-heart"></i>
                <i v-else class="fas fa-spinner fa-spin"></i>
              </button>
              
              <div v-if="formStatus" :class="['form-status', formStatus.type]">
                {{ formStatus.message }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- CTA BANNER -->
    <section class="cta-banner">
      <div class="cta-text">
        <h2>Other Ways to <em>Support Us</em></h2>
        <p>Beyond financial support, you can help us by spreading the word, volunteering your expertise, or partnering with us on projects.</p>
      </div>
      <div class="cta-actions">
        <router-link to="/contact" class="btn-gold">Partner With Us</router-link>
        <router-link to="/projects" class="btn-white">View Projects</router-link>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

const scrollProgress = ref(0)
const impactRef = ref(null)

const impactStats = ref([
  { value: 2400, displayValue: 0, label: 'Farmers Supported', suffix: '+' },
  { value: 8, displayValue: 0, label: 'Countries Active', suffix: '' },
  { value: 15, displayValue: 0, label: 'Projects Funded', suffix: '+' },
  { value: 100, displayValue: 0, label: 'Goes to Impact', suffix: '%' }
])

const animateImpactStats = () => {
  const duration = 2000
  const startTime = Date.now()

  const animate = () => {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)

    impactStats.value.forEach(stat => {
      stat.displayValue = Math.floor(stat.value * progress)
    })

    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      impactStats.value.forEach(stat => {
        stat.displayValue = stat.value
      })
    }
  }

  requestAnimationFrame(animate)
}

const setupImpactObserver = () => {
  if (!impactRef.value) return

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateImpactStats()
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.5 })

  observer.observe(impactRef.value)

  onUnmounted(() => {
    observer.disconnect()
  })
}

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  amount: '',
  project: '',
  message: ''
})

const isSubmitting = ref(false)
const formStatus = ref(null)

const submitForm = async () => {
  isSubmitting.value = true
  formStatus.value = null

  try {
    const response = await fetch('https://formspree.io/f/xjgapoao', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: `${form.firstName} ${form.lastName}`,
        email: form.email,
        _replyto: form.email,
        subject: 'New Donation Pledge',
        _subject: `Donation Pledge from ${form.firstName} ${form.lastName}`,
        amount_usd: form.amount,
        project_of_choice: form.project,
        message: form.message || 'No additional message provided.'
      })
    })

    if (response.ok) {
      formStatus.value = { type: 'success', message: 'Thank you for your generous pledge! We will be in touch shortly.' }
      
      form.firstName = ''
      form.lastName = ''
      form.email = ''
      form.amount = ''
      form.project = ''
      form.message = ''
    } else {
      const data = await response.json()
      if (Object.hasOwn(data, 'errors')) {
        formStatus.value = { type: 'error', message: data.errors.map(error => error.message).join(', ') }
      } else {
        formStatus.value = { type: 'error', message: 'Oops! There was a problem processing your donation pledge.' }
      }
    }
  } catch (error) {
    formStatus.value = { type: 'error', message: 'Oops! There was a problem processing your donation pledge.' }
  } finally {
    isSubmitting.value = false
  }
}

const donationUses = [
  {
    icon: 'fas fa-seedling',
    title: 'Climate Adaptation',
    description: 'Training farmers in climate-smart agriculture practices'
  },
  {
    icon: 'fas fa-scale-balanced',
    title: 'Market Access',
    description: 'Connecting smallholders to fair and sustainable markets'
  },
  {
    icon: 'fas fa-venus',
    title: 'Gender Equity',
    description: 'Empowering women farmers with resources and voices'
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Research &amp; Advocacy',
    description: 'Evidence-based policy work for systemic change'
  }
]

const handleScroll = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = (scrollTop / docHeight) * 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  setupImpactObserver()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--sage), var(--gold));
  z-index: 1000;
  transition: width 0.1s ease;
}

.donate-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: stretch;
  margin: 80px 0;
  padding: 0 48px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.donate-left {
  padding-top: 40px;
}

.donation-uses {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 40px 0;
}

.use-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 20px;
  border-radius: 12px;
  background: rgba(45, 106, 79, 0.05);
  transition: all 0.3s ease;
}

.use-item:hover {
  background: rgba(45, 106, 79, 0.1);
  transform: translateX(4px);
}

.use-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--sage);
  border-radius: 50%;
  color: white;
  font-size: 20px;
}

.use-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.use-text strong {
  color: var(--forest);
  font-weight: 600;
}

.use-text span {
  font-size: 14px;
  color: var(--muted);
}

.trust-badge {
  display: flex;
  gap: 16px;
  padding: 24px;
  background: var(--offwhite);
  border-left: 4px solid var(--gold);
  border-radius: 8px;
  margin-top: 40px;
}

.trust-badge i {
  font-size: 24px;
  color: var(--gold);
  flex-shrink: 0;
}

.trust-badge div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.trust-badge strong {
  color: var(--forest);
  font-weight: 600;
}

.trust-badge span {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.5;
}

.donate-right {
  position: sticky;
  top: 120px;
  display: flex;
  flex-direction: column;
}

.form-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.form-card-header {
  background: linear-gradient(135deg, var(--forest), var(--sage));
  color: white;
  padding: 32px 24px;
  text-align: center;
}

.form-card-header i {
  font-size: 32px;
  margin-bottom: 12px;
}

.form-card-header h3 {
  margin: 12px 0 4px;
  font-size: 22px;
  font-weight: 600;
}

.form-card-header p {
  opacity: 0.9;
  font-size: 14px;
  margin: 0;
}

.form-iframe-wrapper {
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.form-iframe-wrapper iframe {
  border: none;
  flex: 1;
  min-height: 800px;
}

/* Custom Styled Form for DonateView */
.custom-form {
  background: #ffffff;
  border-radius: 8px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--forest);
  margin-bottom: 8px;
  letter-spacing: 0.02em;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 14px 16px;
  border: 1.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background: var(--offwhite);
  color: var(--charcoal);
  font-family: var(--body-font);
  font-size: 0.95rem;
  transition: all 0.25s ease;
  appearance: none; /* helps reset select arrows in some browsers, but optional */
}

/* Add custom arrow for the select */
.form-group select {
  background-image: url('data:image/svg+xml;utf8,<svg fill="%231a3d2b" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>');
  background-repeat: no-repeat;
  background-position-x: calc(100% - 16px);
  background-position-y: center;
  padding-right: 48px;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--sage);
  background: #ffffff;
  box-shadow: 0 0 0 4px rgba(82, 183, 136, 0.1);
}

.form-group textarea {
  resize: vertical;
}

.submit-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  cursor: pointer;
  padding: 16px;
  font-size: 1rem;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.form-status {
  margin-top: 24px;
  padding: 16px;
  border-radius: 4px;
  font-size: 0.95rem;
  font-weight: 500;
  text-align: center;
}

.form-status.success {
  background: rgba(82, 183, 136, 0.1);
  color: var(--leaf);
  border: 1px solid rgba(82, 183, 136, 0.3);
}

.form-status.error {
  background: rgba(220, 53, 69, 0.1);
  color: #dc3545;
  border: 1px solid rgba(220, 53, 69, 0.3);
}

.cta-banner {
  background: linear-gradient(135deg, var(--forest), var(--sage));
  color: white;
  padding: 80px 48px;
  text-align: center;
  border-radius: 16px;
  margin: 80px 48px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.cta-text h2 {
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 16px;
}

.cta-text em {
  color: var(--gold);
  font-style: italic;
  font-weight: 600;
}

.cta-text p {
  font-size: 16px;
  opacity: 0.95;
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-gold,
.btn-white {
  padding: 14px 32px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  cursor: pointer;
  border: none;
  font-size: 16px;
}

.btn-gold {
  background: var(--gold);
  color: var(--forest);
}

.btn-gold:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(201, 168, 76, 0.3);
}

.btn-white {
  background: white;
  color: var(--forest);
  border: 2px solid white;
}

.btn-white:hover {
  background: transparent;
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 1024px) {
  .donate-section {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 0 32px;
  }

  .donate-right {
    position: static;
  }
}

@media (max-width: 768px) {
  .donate-section {
    padding: 0 24px;
  }

  .cta-banner {
    padding: 60px 24px;
    margin: 60px 24px;
  }

  .cta-text h2 {
    font-size: 28px;
  }

  .use-item {
    padding: 16px;
  }

  .trust-badge {
    flex-direction: column;
  }
}
</style>
