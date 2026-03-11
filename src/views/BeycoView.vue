<template>
  <main class="beyco-page">
    <!-- PAGE HERO -->
    <section class="page-hero">
      <div class="page-hero-bg" id="heroBg"></div>
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <ol class="breadcrumb">
          <li><router-link to="/">Home</router-link></li>
          <li class="sep">BEYCO</li>
        </ol>
        <h2>BEYCO — <em>Digital Traceability</em> for Coffee & Cocoa</h2>
      </div>
    </section>

    <!-- WHAT IS BEYCO -->
    <section class="who-we-are">
      <div class="who-images">
        <img src="/assets/img/New_Images/eudr.webp" alt="BEYCO Platform" class="who-img-main">
        <img src="/assets/img/coffee1.jpg" alt="Coffee farming" class="who-img-accent">
      </div>
      <div>
        <span class="section-label">What is BEYCO</span>
        <h2 class="section-title">The First Independent <em>Coffee & Cocoa</em> Trading Platform</h2>
        <div class="reg-badge">
          <i class="fas fa-link"></i>
          In Partnership with Progreso Foundation · Uganda
        </div>
        <p class="body-text">BEYCO is both a web-based and mobile digital traceability platform developed by the <strong>Progreso Foundation</strong> and implemented in partnership with <strong>Ngite Space Limited</strong> in Uganda to support producer organisations, exporters and other stakeholders.</p>
        <p class="body-text">It digitises the coffee and cocoa value chains at an affordable cost. It is the first independent digital coffee and cocoa trading platform that allows farmers and producer organisations to have <strong>full ownership over their data</strong>.</p>
        <p class="body-text">BEYCO uses Blockchain technology to empower supply chain parties — creating a future where every bean contributes to a better world.</p>
        
        <p class="body-text" style="font-weight: 600; color: var(--forest);">Supported value chains:</p>
        <div class="priority-crops">
          <div class="crop-tag">
            <i class="fas fa-mug-hot"></i> Coffee
            <span class="crop-tooltip">Arabica & Robusta · Kasese, Bundibugyo</span>
          </div>
          <div class="crop-tag">
            <i class="fas fa-seedling"></i> Cocoa
            <span class="crop-tooltip">Fine Flavour Cocoa · Western Uganda</span>
          </div>
        </div>
        <br>
        <router-link to="/contact" class="btn-primary">Get a BEYCO Account <i class="fas fa-arrow-right"></i></router-link>
      </div>
    </section>

    <!-- KEY BENEFITS -->
    <div class="mvv">
      <div v-for="benefit in benefits" :key="benefit.title" class="mvv-card">
        <div class="mvv-icon"><i :class="benefit.icon"></i></div>
        <h3>{{ benefit.title }}</h3>
        <p>{{ benefit.desc }}</p>
      </div>
    </div>

    <div class="divider"></div>

    <!-- COUNTERS STRIP -->
    <div class="counters-strip">
      <div v-for="counter in counters" :key="counter.label" class="counter-item">
        <div class="counter-num">
          <span>{{ counter.value }}</span><span class="suffix">{{ counter.suffix }}</span>
        </div>
        <div class="counter-label">{{ counter.label }}</div>
      </div>
    </div>

    <div class="divider"></div>

    <!-- WHY BEYCO -->
    <section class="what-we-do">
      <div class="what-header">
        <span class="section-label" style="color: var(--sage);">Why BEYCO</span>
        <h2 class="section-title">Six Ways BEYCO <em>Strengthens</em> Your Position</h2>
        <p>BEYCO aims to strengthen the market position of every actor in the value chain — from smallholder farmers to international buyers.</p>
      </div>
      <div class="what-grid">
        <div v-for="(feature, index) in features" :key="feature.num" 
             class="what-item" :class="{ open: openWhat === index }"
             @click="openWhat = openWhat === index ? -1 : index">
          <div class="what-num">{{ feature.num }}</div>
          <h4>{{ feature.title }} <span class="expand-icon">{{ openWhat === index ? '−' : '+' }}</span></h4>
          <p>{{ feature.desc }}</p>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="testimonials">
      <div class="testimonials-header">
        <span class="section-label">What Our Clients Say</span>
        <h2 class="section-title">Voices That <em>Trust Us</em></h2>
        <p>Discover why businesses trust Ngite Space to lead their sustainability and climate resilience journeys.</p>
      </div>
      <div class="testi-slider">
        <button class="testi-arrow prev" @click="prevSlide"><i class="fas fa-arrow-left"></i></button>
        <div class="testi-track">
          <div class="testi-slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div v-for="(testi, index) in testimonials" :key="index" class="testi-slide" :class="{ active: currentSlide === index }">
              <div class="testi-big-quote">"</div>
              <div class="stars"><i v-for="n in 5" :key="n" class="fas fa-star"></i></div>
              <blockquote>{{ testi.quote }}</blockquote>
              <div class="testi-divider"></div>
              <div class="testi-person">
                <img :src="testi.avatar" :alt="testi.name" class="testi-avatar">
                <div>
                  <div class="testi-name">{{ testi.name }}</div>
                  <div class="testi-role">{{ testi.role }}</div>
                  <div class="testi-org">{{ testi.org }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="testi-arrow next" @click="nextSlide"><i class="fas fa-arrow-right"></i></button>
      </div>
      <div class="carousel-controls">
        <div v-for="(_, index) in testimonials" :key="index" class="carousel-dot" :class="{ active: currentSlide === index }" @click="currentSlide = index"></div>
      </div>
    </section>

    <!-- CTA BANNER -->
    <div class="cta-banner">
      <h2>Need a BEYCO account to <em>digitise</em> your value chain?</h2>
      <div class="cta-actions">
        <router-link to="/contact" class="btn-gold">Get In Touch</router-link>
        <router-link to="/eudr" class="btn-white">Learn About EUDR</router-link>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const openWhat = ref(-1)

const benefits = [
  { icon: 'fas fa-link', title: 'Blockchain Ownership', desc: 'BEYCO uses Blockchain technology so every actor holds full, verifiable ownership of their data.' },
  { icon: 'fas fa-leaf', title: 'EUDR Compliance Ready', desc: 'Built-in deforestation risk analysis that generates documentation needed to satisfy EU regulations.' },
  { icon: 'fas fa-mobile-alt', title: 'Mobile & Web Access', desc: 'The Beyco Farmer App allows producer organisations to collect data on members and production.' }
]

const counters = [
  { value: '6', suffix: '+', label: 'Platform Features' },
  { value: '2', suffix: '', label: 'Supported Crops' },
  { value: '100', suffix: '%', label: 'Data Ownership' },
  { value: '1', suffix: '', label: 'Independent Platform' }
]

const features = [
  { num: '01', title: 'Farmer Registration & Management', desc: 'Register and manage complete farmer data including profiles and delivery records.' },
  { num: '02', title: 'EUDR Deforestation Risk Analysis', desc: 'Built-in tools that generate deforestation risk analysis and compliance documentation.' },
  { num: '03', title: 'Full Supply Chain Traceability', desc: 'Farmer and supply chain stories attached to every product at every step.' },
  { num: '04', title: 'Cost-Effective EUDR Solution', desc: 'Affordable solution for achieving full EU Deforestation Regulation compliance.' },
  { num: '05', title: 'Direct Buyer Connections', desc: 'Connect producer organisations directly with international buyers through digital trading.' },
  { num: '06', title: 'Real-Time Trade & Market Data', desc: 'Access live pricing and market intelligence to make informed decisions.' }
]

const currentSlide = ref(0)
const testimonials = [
  {
    quote: "I've known Ngite Space to be actively involved in promoting sustainable agricultural practices in cocoa and coffee growing areas. The company has been embarking on farmer trainings on soil conservation, irrigation and agroforestry.",
    name: "Mutooro Martin",
    role: "Coffee & Cocoa Stakeholder",
    org: "Kasese District",
    avatar: "/assets/img/test_1.JPG"
  },
  {
    quote: "I have visited Ngite Space model farms for both cocoa and coffee — providing a learning opportunity in the areas of farming and trade. Ngite Space provides market for cocoa and coffee produced by smallholder farmers.",
    name: "Mbabazi Flaviah",
    role: "Environmentalist",
    org: "Bundibugyo",
    avatar: "/assets/img/test_2.jpg"
  },
  {
    quote: "The first consignment I bought from Ngite Space was cocoa and its quality told a story of commitment to meeting customer needs and changing lives of farming communities.",
    name: "Joylet Musimenta",
    role: "Cocoa Buyer",
    org: "Kasese",
    avatar: "/assets/img/test_5.JPG"
  }
]

let autoTimer
const startAuto = () => { autoTimer = setInterval(() => nextSlide(), 5000) }
const nextSlide = () => { currentSlide.value = (currentSlide.value + 1) % testimonials.length }
const prevSlide = () => { currentSlide.value = (currentSlide.value - 1 + testimonials.length) % testimonials.length }

onMounted(() => startAuto())
onUnmounted(() => clearInterval(autoTimer))
</script>

<style scoped>
/* All styles are defined globally in main.css */
</style>
