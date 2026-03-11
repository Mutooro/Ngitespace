<template>
  <main class="about-page">
    <!-- PAGE HERO -->
    <section class="page-hero">
      <div class="page-hero-bg" id="heroBg"></div>
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <ol class="breadcrumb">
          <li><router-link to="/">Home</router-link></li>
          <li class="sep">About Us</li>
        </ol>
        <h1>About <em>Ngite Space</em></h1>
      </div>
    </section>

    <!-- WHO WE ARE -->
    <section class="who-we-are">
      <div class="who-images">
        <img src="/assets/img/New_Images/gettyimages-518782849-612x612.jpg" alt="Ngite Space coffee farming" class="who-img-main">
      </div>
      <div>
        <span class="section-label">Our Story</span>
        <h2 class="section-title">Who <em>We Are</em></h2>
        <div class="reg-badge">
          <i class="fas fa-certificate"></i>
          Reg. No. 80034879454906 · Uganda
        </div>
        <p class="body-text">Ngite Space Limited is an agro-processing and climate change focused company registered under
          the laws of Uganda, dedicated to fostering sustainable food production and responsible trade in the era of
          climate change.</p>
        <p class="body-text">Our business strategy bridges the gap between producers, traders, consumers and climate
          change activists in the world's food system. We foster collaborations between those who understand the need for
          responsible production, sourcing, processing and consumption.</p>
        <p class="body-text">At Ngite Space, we champion cleaner production technologies to guarantee greener value
          chains. We develop and promote products and services that focus on reducing the environmental impact of
          agricultural value chains, while ensuring sustainable food security. We also help foreign companies and buyers
          to sustainably identify and source commodities.</p>
        <p class="body-text" style="font-weight: 600; color: var(--forest);">Our priority crops and value chains:</p>
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
        <p class="body-text">Through collective action, collaborations and community-driven initiatives, we strive to
          create more sustainable and equitable coffee and cocoa value chains.</p>
        <br>
        <router-link to="/services" class="btn-primary">Our Services <i class="fas fa-arrow-right"></i></router-link>
      </div>
    </section>

    <!-- COUNTERS STRIP -->
    <div class="counters-strip">
      <div v-for="counter in counterItems" :key="counter.label" class="counter-item">
        <div class="counter-num">
          <span>{{ counter.value }}</span><span class="suffix">{{ counter.suffix }}</span>
        </div>
        <div class="counter-label">{{ counter.label }}</div>
      </div>
    </div>

    <!-- MISSION VISION VALUES -->
    <div class="mvv">
      <div class="mvv-card mission">
        <div class="mvv-icon"><i class="fas fa-bullseye"></i></div>
        <h3>Our Mission</h3>
        <p>Building climate resilience and adaptive capacity in the world's food system and trade, mainly coffee and cocoa
          value chains.</p>
      </div>
      <div class="mvv-card vision">
        <div class="mvv-icon"><i class="fas fa-eye"></i></div>
        <h3>Our Vision</h3>
        <p>Inclusive, life-changing and sustainable coffee and cocoa value chains emanating from our environmental action
          in the agro-food system.</p>
      </div>
      <div class="mvv-card values">
        <div class="mvv-icon"><i class="fas fa-heart"></i></div>
        <h3>Our Values</h3>
        <ul class="values-list">
          <li><i class="fas fa-check-circle"></i> Sustainability</li>
          <li><i class="fas fa-check-circle"></i> Collaboration</li>
          <li><i class="fas fa-check-circle"></i> Trust</li>
          <li><i class="fas fa-check-circle"></i> Accountability</li>
        </ul>
      </div>
    </div>

    <div class="divider"></div>

    <!-- WHAT WE DO -->
    <section class="what-we-do">
      <div class="what-header">
        <span class="section-label" style="color: var(--sage);">Our Work</span>
        <h2 class="section-title">What We <em>Do</em></h2>
        <p>We operate across the full spectrum of sustainable agriculture and climate action — from the farm gate to
          international markets.</p>
      </div>
      <div class="what-grid">
        <div v-for="(item, index) in whatWeDo" :key="item.num" 
             class="what-item" :class="{ open: openWhat === index }" 
             @click="openWhat = openWhat === index ? -1 : index">
          <div class="what-num">{{ item.num }}</div>
          <h4>{{ item.title }} <span class="expand-icon">{{ openWhat === index ? '−' : '+' }}</span></h4>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </section>

    <div class="divider" style="margin-top: 0;"></div>

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
              <div class="stars">
                <i v-for="n in 5" :key="n" class="fas fa-star"></i>
              </div>
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

      <!-- Dots -->
      <div class="carousel-controls">
        <div v-for="(_, index) in testimonials" :key="index" class="carousel-dot" :class="{ active: currentSlide === index }" @click="currentSlide = index"></div>
      </div>
    </section>

    <!-- CTA -->
    <div class="cta-banner">
      <h2>Want to partner with us for a <em>greener</em> future?</h2>
      <div class="cta-actions">
        <router-link to="/contact" class="btn-gold">Get In Touch</router-link>
        <router-link to="/services" class="btn-white">Our Services</router-link>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const openWhat = ref(-1)

const counterItems = [
  { value: '4', suffix: '+', label: 'Years of Experience' },
  { value: '2', suffix: ' Crops', label: 'Priority Value Chains' },
  { value: '7', suffix: '', label: 'Key Objectives' },
  { value: '100', suffix: '%', label: 'Sustainability Focused' }
]

const whatWeDo = [
  { num: '01', title: 'Sustainable Sourcing', desc: 'Responsibly sourcing coffee and cocoa with full traceability — connecting ethical buyers to verified Ugandan producers.' },
  { num: '02', title: 'EUDR Compliance', desc: 'Supporting companies in meeting EU Deforestation Regulation requirements through documentation, GIS mapping and risk assessment.' },
  { num: '03', title: 'Carbon Accounting', desc: 'Helping companies discover and manage their environmental impact through rigorous carbon accounting and sustainability reporting.' },
  { num: '04', title: 'Farmer Training', desc: 'Training smallholder farmers on climate-smart agriculture, post-harvest handling and value addition technologies.' },
  { num: '05', title: 'Climate Adaptation', desc: 'Supporting vulnerable farming communities with climate adaptation strategies, resilience building and ecosystem restoration.' },
  { num: '06', title: 'Advocacy & Research', desc: 'Conducting research and public education on climate change and sustainable agriculture in coffee and cocoa value chains.' }
]

const currentSlide = ref(0)
const testimonials = [
  {
    quote: "I've known Ngite Space to be actively involved in promoting sustainable agricultural practices in cocoa and coffee growing areas to mitigate and adapt to climate change. The company has been embarking on farmer trainings on soil conservation, irrigation and agroforestry, thereby promoting farmer resilience against climate change.",
    name: "Mutooro Martin",
    role: "Coffee & Cocoa Stakeholder",
    org: "Kasese District",
    avatar: "/assets/img/test_1.JPG"
  },
  {
    quote: "I have visited Ngite Space model farms for both cocoa and coffee — providing a learning opportunity in the areas of farming and trade. Ngite Space provides market for cocoa and coffee produced by small holder farmers in districts of Kasese and Bundibugyo, thereby touching farmers' livelihoods.",
    name: "Mbabazi Flaviah",
    role: "Environmentalist",
    org: "Bundibugyo",
    avatar: "/assets/img/test_2.jpg"
  },
  {
    quote: "The first consignment I bought from Ngite Space was cocoa and its quality told a story of commitment to meeting customer needs and changing lives of farming communities. Their model with climate change activism puts sustainability at the forefront — I'm sure of continued partnership.",
    name: "Joylet Musimenta",
    role: "Cocoa Buyer",
    org: "Kasese",
    avatar: "/assets/img/test_5.JPG"
  }
]

let autoTimer
const startAuto = () => { autoTimer = setInterval(() => nextSlide(), 5000) }
const resetAuto = () => { clearInterval(autoTimer); startAuto() }

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % testimonials.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + testimonials.length) % testimonials.length
}

onMounted(() => {
  startAuto()
})

onUnmounted(() => {
  clearInterval(autoTimer)
})
</script>

<style scoped>
/* All styles are defined globally in main.css */
</style>
