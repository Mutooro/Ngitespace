<template>
  <main>
    <!-- HERO -->
    <section class="hero" id="hero">
      <div class="hero-bg" id="heroBg" :style="{ backgroundImage: `url(${slides[currentSlide]})` }"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-badge">Uganda · Coffee & Cocoa Value Chains</div>
        <h1>Home of <em>Greener</em><br>Value Chains</h1>
        <p>Ngite Space Ltd bridges producers, traders, and climate activists — fostering sustainable sourcing, EUDR
          compliance, and cleaner production across coffee and cocoa value chains in Uganda.</p>
        <div class="hero-actions">
          <router-link to="/about" class="btn-primary">
            Discover More <i class="fas fa-arrow-right"></i>
          </router-link>
          <router-link to="/services" class="btn-outline">
            Our Services
          </router-link>
        </div>
      </div>
      <div class="hero-scroll">
        <div class="hero-scroll-line"></div>
        Scroll
      </div>
      <div class="hero-dots">
        <div v-for="(slide, index) in slides" :key="index" class="hero-dot" :class="{ active: currentSlide === index }"
          @click="currentSlide = index"></div>
      </div>
    </section>

    <!-- STATS -->
    <div class="stats-bar" ref="statsRef">
      <div v-for="stat in stats" :key="stat.label" class="stat-item">
        <div class="stat-num">{{ stat.displayValue }}<span v-if="stat.suffix">{{ stat.suffix }}</span></div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </div>

    <!-- ABOUT -->
    <section class="about">
      <div class="about-images">
        <img src="/assets/img/New_Images/gettyimages-518782849-612x612.jpg" alt="Ngite Space coffee farming"
          class="about-img-main">
        <img src="/assets/img/cocoa1.jpeg" alt="Cocoa" class="about-img-accent">
        <div class="about-badge-floating">
          <strong>Est.</strong>
          <span>Uganda</span>
        </div>
      </div>
      <div class="about-text-col">
        <span class="section-label">Who We Are</span>
        <h2 class="section-title">Growing a <em>sustainable</em> future for coffee & cocoa</h2>
        <p class="about-text">Ngite Space Limited is an agro-processing and climate change focused company registered
          under the laws of Uganda (Reg. No. 80034879454906), dedicated to fostering sustainable food production and
          responsible trade in the era of climate change.</p>
        <p class="about-text">Our business strategy bridges the gap between producers, traders, consumers and climate
          change activists in the world's food system — championing cleaner production technologies to guarantee greener
          value chains.</p>
        <div class="about-values">
          <div class="value-pill"><i class="fas fa-check-circle"></i> Sustainability</div>
          <div class="value-pill"><i class="fas fa-check-circle"></i> Collaboration</div>
          <div class="value-pill"><i class="fas fa-check-circle"></i> Trust</div>
          <div class="value-pill"><i class="fas fa-check-circle"></i> Accountability</div>
        </div>
        <router-link to="/about" class="btn-primary" style="width: fit-content;">
          Learn More About Us <i class="fas fa-arrow-right"></i>
        </router-link>
      </div>
    </section>

    <div class="divider"></div>

    <!-- SERVICES -->
    <section class="services">
      <div class="services-header">
        <span class="section-label">What We Offer</span>
        <h2 class="section-title">Our Core <em>Services</em></h2>
      </div>

      <!-- Filter Tabs -->
      <div class="service-filters">
        <button v-for="filter in filters" :key="filter.id" class="filter-btn"
          :class="{ active: currentFilter === filter.id }" @click="currentFilter = filter.id">
          {{ filter.label }}
        </button>
      </div>

      <div class="services-grid">
        <div v-for="service in filteredServices" :key="service.title" class="service-card-wrap">
          <div class="service-card-inner">
            <div class="card-front">
              <div class="service-icon"><i :class="service.icon"></i></div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.shortDesc }}</p>
              <div class="card-hint"><i class="fas fa-sync-alt"></i> Hover to learn more</div>
            </div>
            <div class="card-back">
              <div>
                <div class="card-back-icon"><i :class="service.icon"></i></div>
                <h4>{{ service.title }}</h4>
                <p>{{ service.fullDesc }}</p>
              </div>
              <router-link :to="service.link" class="service-link">Explore Service <i
                  class="fas fa-arrow-right"></i></router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- OBJECTIVES -->
    <section class="objectives">
      <div class="objectives-grid">
        <div class="objectives-left">
          <span class="section-label">Our Direction</span>
          <h2 class="section-title">Key <em>Objectives</em> Driving Our Work</h2>
          <p>We are guided by clear, impact-driven objectives that shape every partnership, project, and program we
            undertake across Uganda's coffee and cocoa sectors.</p>
        </div>
        <div>
          <ol class="obj-list">
            <li v-for="(obj, index) in objectives" :key="index">
              <span class="obj-num">0{{ index + 1 }}.</span> {{ obj }}
            </li>
          </ol>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section class="projects">
      <div class="projects-header">
        <div>
          <span class="section-label">What We're Doing</span>
          <h2 class="section-title">Company <em>Projects</em></h2>
        </div>
        <router-link to="/projects" class="btn-primary">View All Projects <i class="fas fa-arrow-right"></i></router-link>
      </div>
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.title" class="project-card">
          <img :src="project.image" :alt="project.title">
          <div class="project-overlay">
            <span class="project-tag">{{ project.tag }}</span>
            <h3>{{ project.title }}</h3>
            <router-link to="/projects" class="project-cta">See Details <i class="fas fa-arrow-right"></i></router-link>
          </div>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- FAQ -->
    <section class="faq">
      <div class="faq-image">
        <img src="/assets/img/New_Images/The-Cocoa-Impact-story-1024x683.webp" alt="FAQ">
        <div class="faq-image-caption">
          <strong style="color:#fff; display:block; margin-bottom:6px;">Our Mission</strong>
          Building climate resilience and adaptive capacity in the world's food system and trade, mainly coffee and cocoa
          value chains.
        </div>
      </div>
      <div>
        <span class="section-label">FAQ</span>
        <h2 class="section-title">Have Any <em>Questions?</em></h2>
        <br>
        <div class="accordion">
          <div v-for="(item, index) in faqs" :key="index" class="accordion-item" :class="{ open: openFaq === index }">
            <div class="accordion-head" @click="openFaq = openFaq === index ? -1 : index">
              <h3>{{ item.question }}</h3>
              <span class="accordion-icon"><i class="fas fa-chevron-down"></i></span>
            </div>
            <div class="accordion-body">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- NEWS -->
    <section class="news">
      <div class="news-header">
        <div>
          <span class="section-label">Stay Informed</span>
          <h2 class="section-title">Latest News & <em>Updates</em></h2>
        </div>
        <router-link to="/blog" class="btn-primary">All Articles <i class="fas fa-arrow-right"></i></router-link>
      </div>
      <div class="news-grid">
        <div v-for="post in news" :key="post.title" class="news-card">
          <div class="news-thumb">
            <img :src="post.image" :alt="post.title">
            <span class="news-tag">{{ post.tag }}</span>
          </div>
          <div class="news-body">
            <div class="news-meta">
              <span><i class="fas fa-user"></i> {{ post.author }}</span>
              <span><i class="fas fa-tag"></i> {{ post.category }}</span>
            </div>
            <h3><router-link :to="post.link">{{ post.title }}</router-link></h3>
            <router-link :to="post.link" class="service-link">Read More <i class="fas fa-arrow-right"></i></router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA BANNER -->
    <div class="cta-banner">
      <h2>Ready to build a <em>greener</em>, more sustainable future together?</h2>
      <div class="cta-actions">
        <router-link to="/contact" class="btn-gold">Get In Touch</router-link>
        <router-link to="/services" class="btn-white">Our Services</router-link>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const statsRef = ref(null)
const stats = ref([
  { label: 'Priority Value Chains', value: 2, displayValue: 0, suffix: '+' },
  { label: 'Key Objectives', value: 7, displayValue: 0, suffix: '' },
  { label: 'Active Projects', value: 4, displayValue: 0, suffix: '' },
  { label: 'Sustainability Focus', value: 100, displayValue: 0, suffix: '%' }
])

const animateStats = () => {
  const duration = 2000
  const startTime = Date.now()

  const animate = () => {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)

    stats.value.forEach(stat => {
      stat.displayValue = Math.floor(stat.value * progress)
    })

    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      stats.value.forEach(stat => {
        stat.displayValue = stat.value
      })
    }
  }

  requestAnimationFrame(animate)
}

const setupStatsObserver = () => {
  if (!statsRef.value) return

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStats()
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.5 })

  observer.observe(statsRef.value)

  onUnmounted(() => {
    observer.disconnect()
  })
}

const currentSlide = ref(0)
const slides = [
  '/assets/img/cocoabg.webp',
  '/assets/img/export2.webp',
  '/assets/img/coffee3.jpeg'
]

let slideInterval
onMounted(() => {
  slideInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 5000)
  setupStatsObserver()
})

onUnmounted(() => {
  clearInterval(slideInterval)
})

const currentFilter = ref('all')
const filters = [
  { id: 'all', label: 'All Services' },
  { id: 'sourcing', label: 'Sourcing & Trade' },
  { id: 'compliance', label: 'Compliance' },
  { id: 'training', label: 'Training' },
  { id: 'climate', label: 'Climate Action' }
]

const services = [
  {
    category: 'sourcing',
    icon: 'fas fa-seedling',
    title: 'Coffee & Cocoa Sourcing',
    shortDesc: 'Sustainable and responsible sourcing with full traceability across the value chain, connecting buyers to verified producers.',
    fullDesc: 'We source Arabica & Robusta coffee and fine-flavour cocoa directly from smallholder farmers in Kasese and Bundibugyo — ensuring quality, fair pricing, and full supply chain traceability for international buyers.',
    link: '/services'
  },
  {
    category: 'compliance',
    icon: 'fas fa-leaf',
    title: 'EUDR Due Diligence',
    shortDesc: 'Full compliance support for the EU Deforestation Regulation — geolocation, documentation, risk assessment and traceability.',
    fullDesc: 'We help exporters and importers meet the EU Deforestation Regulation requirements — from farm-level GPS mapping and documentation to risk assessments that satisfy EU customs authorities.',
    link: '/eudr'
  },
  {
    category: 'compliance',
    icon: 'fas fa-map-marked-alt',
    title: 'GIS Services',
    shortDesc: 'Geospatial mapping and analysis for farm delineation, land use monitoring, and supply chain traceability solutions.',
    fullDesc: 'Our GIS team provides precise farm polygon mapping, land-use change detection, and spatial data analysis — critical for EUDR compliance, environmental auditing, and traceability systems.',
    link: '/services'
  },
  {
    category: 'climate',
    icon: 'fas fa-cloud-sun',
    title: 'Climate Change Mitigation',
    shortDesc: 'Adaptation strategies, carbon accounting, and cleaner production training to build resilience in farming communities.',
    fullDesc: 'We design and implement carbon accounting systems, climate adaptation plans, and cleaner production programmes that reduce environmental footprints while maintaining productivity for farming communities.',
    link: '/services'
  },
  {
    category: 'sourcing',
    icon: 'fas fa-handshake',
    title: 'Buyer Representation',
    shortDesc: 'Helping international buyers sustainably identify and source commodities in Uganda with full local expertise and support.',
    fullDesc: 'We act as your trusted local partner in Uganda — identifying reliable farmers, negotiating fair prices, handling logistics, and ensuring every shipment meets your quality and sustainability requirements.',
    link: '/services'
  },
  {
    category: 'training',
    icon: 'fas fa-chalkboard-teacher',
    title: 'Farmer Training',
    shortDesc: 'Climate-smart agriculture, post-harvest handling, and value addition technologies for smallholder farmers.',
    fullDesc: 'We run hands-on training programmes covering soil conservation, irrigation, agroforestry, post-harvest handling and value addition — equipping smallholder farmers with skills to boost yields and income.',
    link: '/services'
  }
]

const filteredServices = computed(() => {
  if (currentFilter.value === 'all') return services
  return services.filter(s => s.category === currentFilter.value)
})

const objectives = [
  "To be the world's leading supplier of sustainable and responsibly sourced coffee and cocoa.",
  "Help companies discover their environmental impact and compliance through carbon accounting.",
  "Train farmers on climate-smart, post-harvest and value addition technologies.",
  "Promote cleaner production technologies in agro-food systems and farmers' daily life.",
  "Support communities most vulnerable to climate change in adaptation and resilience.",
  "Conserve and restore natural ecosystems vital to climate regulation and biodiversity.",
  "Advocate, research, and educate on climate change and sustainable agriculture."
]

const projects = [
  { image: '/assets/img/audit.JPG', tag: 'Climate', title: 'Ngite Climate Auditorium for Coffee & Cocoa Stakeholders' },
  { image: '/assets/img/New_Images/gettyimages-518782849-612x612.jpg', tag: 'Food Security', title: 'Food Security for Coffee & Cocoa Growing Communities' },
  { image: '/assets/img/coffee_bg.jpeg', tag: 'Gender & Climate', title: 'Women for Climate Action' },
  { image: '/assets/img/climate-change/event_card_img_1.jpg', tag: 'Environment', title: 'Responsible Waste Disposal' }
]

const openFaq = ref(0)
const faqs = [
  {
    question: "How does climate change impact coffee quality?",
    answer: "Climate change significantly affects coffee quality — from flavor and aroma to bean size. Drought conditions stress plants, leading to smaller beans. Higher temperatures cause faster ripening, reducing time for complex flavor development, and also trigger pest outbreaks that reduce yields."
  },
  {
    question: "What causes climate change?",
    answer: "The primary cause is the increase in greenhouse gases — carbon dioxide, methane, and nitrous oxide — in the atmosphere. These gases trap heat, leading to global warming and climate disruption across ecosystems worldwide."
  },
  {
    question: "How can smallholder farmers survive climate change?",
    answer: "Smallholders can adapt through agroforestry, cover cropping, drought-resistant varieties, water conservation technologies, climate finance, and farmer training. Group formation helps build stronger market connections and collective resilience."
  },
  {
    question: "How does Ngite Space advocate for climate action?",
    answer: "We educate on climate action, support policies for renewable energy, train on cleaner production technologies, and collaborate with climate-focused organizations. Our advocacy holds value chain actors and government accountable for environmental protection."
  }
]

const news = [
  {
    image: '/assets/img/New_Images/eudr.webp',
    tag: 'Environment',
    author: 'Ngite Space',
    category: 'Regulation',
    title: 'European Union Deforestation Regulation (EUDR) — What It Means for Uganda',
    link: '/eudr'
  },
  {
    image: '/assets/img/New_Images/step-3-990x_.webp',
    tag: 'Research',
    author: 'Ngite Space',
    category: 'Sustainability',
    title: 'Climate Change and Resource Sustainability in African Agriculture',
    link: '/publication_01'
  },
  {
    image: '/assets/img/image_2.jpg',
    tag: 'Business',
    author: 'Admin',
    category: 'Partnerships',
    title: 'Our New Partnerships — Expanding Greener Value Chains',
    link: '#'
  }
]
</script>

<style scoped>
/* Scoped styles are handled by main.css for now */
</style>
