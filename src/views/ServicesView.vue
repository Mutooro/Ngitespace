<template>
  <main class="services-page">
    <!-- PAGE HERO -->
    <section class="page-hero">
      <div class="page-hero-bg" id="heroBg"></div>
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <ol class="breadcrumb">
          <li><router-link to="/">Home</router-link></li>
          <li class="sep">Services & Products</li>
        </ol>
        <h1>Our Services <em>& Products</em></h1>
      </div>
    </section>

    <!-- SERVICES INTRO -->
    <section class="services-intro">
      <div class="services-intro-img">
        <img src="/assets/img/New_Images/smell_coffee.jpg" alt="Ngite Space operations">
        <div class="services-intro-badge">
          <strong>12+</strong>
          <span>Core Services</span>
        </div>
      </div>
      <div>
        <span class="section-label">What We Offer</span>
        <h2 class="section-title">Services Tailored for <em>Greener</em> Value Chains</h2>
        <p class="body-text">From sustainable sourcing and EUDR compliance to climate-smart agriculture training, Ngite
          Space offers a comprehensive suite of services designed to make agricultural value chains more sustainable,
          traceable, and climate-resilient.</p>
        <p class="body-text">We work with farmers, traders, processors, and international buyers to bridge the gap between
          responsible production and conscious consumption.</p>
        <br>
        <router-link to="/contact" class="btn-primary">Get In Touch <i class="fas fa-arrow-right"></i></router-link>
      </div>
    </section>

    <div class="divider"></div>

    <!-- SERVICES GRID -->
    <section class="services-section" id="servicesGrid">
      <div class="services-header">
        <span class="section-label">Our Services</span>
        <h2 class="section-title">How We <em>Help</em></h2>
        <p>We operate across the full spectrum of sustainable agriculture, climate action, and responsible trade —
          delivering impact from the farm gate to international markets.</p>
      </div>
      <div class="filter-bar">
        <button v-for="filter in filters" :key="filter.id" class="filter-btn"
          :class="{ active: currentFilter === filter.id }" @click="currentFilter = filter.id">
          {{ filter.label }}
        </button>
      </div>
      <div class="services-grid">
        <div v-for="(service, index) in filteredServices" :key="index" class="service-card show">
          <div class="card-glow"></div>
          <span class="service-num">{{ formatNum(service.num) }}</span>
          <div class="service-icon"><i :class="service.icon"></i></div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- PRODUCTS SECTION -->
    <section class="products-section">
      <div class="products-header">
        <span class="section-label">Our Products</span>
        <h2 class="section-title">Premium <em>Products</em></h2>
        <p>We grow, process, and trade premium quality coffee and cocoa — responsibly sourced from Ugandan farming
          communities.</p>
      </div>
      <div class="products-grid">
        <div v-for="product in products" :key="product.title" class="product-card">
          <div class="product-img">
            <img :src="product.image" :alt="product.title">
          </div>
          <div class="product-info">
            <span class="product-tag">{{ product.tag }}</span>
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE US -->
    <section class="why-section">
      <div class="why-header">
        <span class="section-label" style="color: var(--sage);">Why Ngite Space</span>
        <h2 class="section-title">Why Work <em>With Us</em></h2>
        <p>We combine deep local expertise with international standards to deliver measurable impact across the value
          chain.</p>
      </div>
      <div class="why-grid">
        <div v-for="reason in reasons" :key="reason.title" class="why-card">
          <div class="why-icon"><i :class="reason.icon"></i></div>
          <h4>{{ reason.title }}</h4>
          <p>{{ reason.description }}</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <div class="cta-banner">
      <h2>Ready to explore our services for a <em>sustainable</em> future?</h2>
      <div class="cta-actions">
        <router-link to="/contact" class="btn-gold">Get In Touch</router-link>
        <router-link to="/projects" class="btn-white">Our Projects</router-link>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentFilter = ref('all')
const filters = [
  { id: 'all', label: 'All Services' },
  { id: 'sourcing', label: 'Sourcing & Trade' },
  { id: 'compliance', label: 'Compliance' },
  { id: 'training', label: 'Training' },
  { id: 'climate', label: 'Climate Action' }
]

const services = [
  { num: 1, category: 'sourcing', icon: 'fas fa-chart-line', title: 'Coffee Trade & Market Analysis', description: 'Comprehensive training and analysis on coffee trade dynamics, helping stakeholders navigate market trends and maximize value.' },
  { num: 2, category: 'sourcing', icon: 'fas fa-handshake', title: 'Buyer Representation', description: 'Professional representation for coffee and cocoa buyers — sustainably identifying and sourcing premium quality commodities across Uganda.' },
  { num: 3, category: 'sourcing', icon: 'fas fa-clipboard-check', title: 'Quality Assurance', description: 'Third party quality assurance services ensuring coffee and cocoa products meet the highest international standards for export and trade.' },
  { num: 4, category: 'sourcing', icon: 'fas fa-certificate', title: 'Phyto Sanitary Services', description: 'Expert Phyto Sanitary services for agricultural export commodities, ensuring full compliance with international plant health standards.' },
  { num: 5, category: 'compliance', icon: 'fas fa-file-shield', title: 'EUDR Due Diligence', description: 'Supporting companies in meeting EU Deforestation Regulation requirements through robust documentation and comprehensive risk assessment.' },
  { num: 6, category: 'compliance', icon: 'fas fa-map-location-dot', title: 'Farm Data Management', description: 'Advanced data management solutions for farms to ensure full EUDR compliance and data-driven supply chain transparency.' },
  { num: 7, category: 'compliance', icon: 'fas fa-tree-circle-exclamation', title: 'Deforestation Risk Analysis', description: 'Scientific analysis of deforestation risks to help companies maintain ethical supply chains and protect critical forest ecosystems.' },
  { num: 8, category: 'compliance', icon: 'fas fa-earth-africa', title: 'GIS Services', description: 'Geographic Information System services for precise farm mapping, land-use monitoring, and spatial analysis to support traceability.' },
  { num: 9, category: 'climate', icon: 'fas fa-bullhorn', title: 'Climate Advocacy', description: 'Climate change education, public campaigns, and policy advocacy to drive systemic change and environmental resilience.' },
  { num: 10, category: 'training', icon: 'fas fa-wheat-awn', title: 'Food Security Training', description: 'Food security and post-harvest loss management trainings to help farming communities build resilience and reduce waste.' },
  { num: 11, category: 'climate', icon: 'fas fa-microscope', title: 'Climate Research', description: 'Climate-focused research generating evidence-based insights to inform sustainable practices across agricultural value chains.' }
]

const filteredServices = computed(() => {
  if (currentFilter.value === 'all') return services
  return services.filter(s => s.category === currentFilter.value)
})

const formatNum = (n) => n < 10 ? `0${n}` : n

const products = [
  { image: '/assets/img/cocoa2.jpeg', tag: 'Agribusiness', title: 'Coffee & Cocoa Trading', description: 'We grow and process coffee and cocoa from our farms, buy from smallholder farmers in communities across Uganda. Our products are responsibly sourced and geared to be exemplary in the agribusiness-climate change relationship.' },
  { image: '/assets/img/biochar.webp', tag: 'Innovation', title: 'Biochar & Green Charcoal', description: 'We produce biochar from solid organic waste, used as a soil feed and fertilizer. Biochar improves soil health and fertility, with potential in sequestering and capturing carbon from the atmosphere.' }
]

const reasons = [
  { icon: 'fas fa-certificate', title: 'Full Traceability', description: 'Every product is traceable from farm to market with comprehensive documentation and GIS mapping data.' },
  { icon: 'fas fa-globe-africa', title: 'Climate Commitment', description: 'Sustainability isn\'t a buzzword for us — it\'s embedded in every service and product we deliver.' },
  { icon: 'fas fa-users', title: 'Community Impact', description: 'We work directly with farming communities, ensuring fair trade practices and livelihood improvements.' },
  { icon: 'fas fa-shield-halved', title: 'EUDR Ready', description: 'Our systems and processes are designed for full compliance with the EU Deforestation Regulation from day one.' },
  { icon: 'fas fa-award', title: 'Quality Guaranteed', description: 'Rigorous quality assurance at every stage ensures our products meet the highest international standards.' },
  { icon: 'fas fa-lightbulb', title: 'Innovation Driven', description: 'From biochar production to carbon accounting, we leverage innovative solutions for sustainable agriculture.' }
]
</script>

<style scoped>
/* All styles are defined globally in main.css */
</style>
