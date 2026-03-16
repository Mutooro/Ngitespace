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
          <div class="form-iframe-wrapper">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeqz0EXV0h5BcgzqGmpwyPD9ZeYbiaI5y6eT-phGjBSHfB-rg/viewform?embedded=true"
              frameborder="0" marginheight="0" marginwidth="0" title="Donation Form" loading="lazy">
              Loading…
            </iframe>
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
import { ref, onMounted, onUnmounted } from 'vue'

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
