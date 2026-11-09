<template>
  <main>
    <!-- HERO -->
    <section class="hero" id="hero">
      <div class="hero-bg active" role="img"
        aria-label="Coffee and cocoa farming in Uganda"
        :style="{ backgroundImage: 'url(/assets/img/img_5783.webp)' }"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-badge">Uganda · Coffee & Cocoa Value Chains</div>
        <h1>Home of <em>Greener</em><br>Value Chains</h1>
        <p>Ngite Space helps coffee and cocoa buyers, exporters and farming communities in Uganda source sustainably,
          meet EUDR requirements, and build climate resilience.</p>
        <div class="hero-trust">
          <div class="trust-item">
            <i class="fas fa-leaf" aria-hidden="true"></i>
            <span>EUDR Compliant</span>
          </div>
          <div class="trust-item">
            <i class="fas fa-globe-africa" aria-hidden="true"></i>
            <span>Uganda-Based</span>
          </div>
          <div class="trust-item">
            <i class="fas fa-certificate" aria-hidden="true"></i>
            <span>Certified Quality</span>
          </div>
        </div>
        <div class="hero-actions">
          <a href="#paths" class="btn-primary">
            Find Your Starting Point <i class="fas fa-arrow-down"></i>
          </a>
          <router-link to="/contact" class="btn-outline">
            Contact Us
          </router-link>
        </div>
      </div>
      <button type="button" class="hero-scroll" @click="scrollToPaths">
        <div class="hero-scroll-line" aria-hidden="true"></div>
        Scroll
      </button>
    </section>

    <!-- AUDIENCE PATHS -->
    <section class="paths" id="paths">
      <div class="services-header">
        <span class="section-label">Start Here</span>
        <h2 class="section-title">What brings you <em>here?</em></h2>
        <p>Tell us who you are and we'll point you to the right service or talk to us directly.</p>
      </div>
      <div class="paths-grid">
        <div v-for="path in paths" :key="path.title" class="path-card" :class="{ featured: path.featured }">
          <div class="service-icon" aria-hidden="true"><i :class="path.icon"></i></div>
          <h3>{{ path.title }}</h3>
          <p>{{ path.desc }}</p>
          <ul class="path-specs">
            <li v-for="point in path.points" :key="point"><i class="fas fa-check" aria-hidden="true"></i> {{ point }}</li>
          </ul>
          <div class="path-links">
            <router-link :to="path.link" class="service-link">{{ path.cta }} <i class="fas fa-arrow-right"
                aria-hidden="true"></i></router-link>
            <router-link to="/contact" class="path-contact">or talk to us</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <div class="stats-bar" ref="statsRef">
      <div v-for="stat in stats" :key="stat.label" class="stat-item">
        <div class="stat-num">{{ stat.displayValue }}<span v-if="stat.suffix">{{ stat.suffix }}</span></div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </div>

    <!-- SERVICES -->
    <section class="services">
      <div class="services-header">
        <span class="section-label">What We Offer</span>
        <h2 class="section-title">Services by <em>Focus Area</em></h2>
      </div>

      <div class="programs-grid">
        <div v-for="(group, index) in serviceGroups" :key="group.label" class="program-card"
          :class="{ featured: index === 1 }">
          <span class="program-num" aria-hidden="true">0{{ index + 1 }}</span>
          <h3 class="program-title">{{ group.label }}</h3>
          <p class="program-desc">{{ group.desc }}</p>
          <ul class="program-services">
            <li v-for="service in group.services" :key="service.title">
              <div class="program-service-icon" aria-hidden="true"><i :class="service.icon"></i></div>
              <div class="program-service-text">
                <strong>{{ service.title }}</strong>
                <span>{{ service.shortDesc }}</span>
              </div>
              <router-link :to="service.link" class="program-link"
                :aria-label="`Learn more about ${service.title}`">
                <i class="fas fa-arrow-right" aria-hidden="true"></i>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="services-more">
        <router-link to="/services" class="btn-primary">View All Services <i class="fas fa-arrow-right"></i></router-link>
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
        <article v-for="project in projects" :key="project.title" class="project-card">
          <img :src="project.image" :alt="project.title" loading="lazy">
          <div class="project-overlay">
            <span class="project-tag">{{ project.tag }}</span>
            <h3>{{ project.title }}</h3>
            <router-link to="/projects" class="project-cta">See Details <i class="fas fa-arrow-right"
                aria-hidden="true"></i></router-link>
          </div>
        </article>
      </div>
    </section>

    <div class="divider"></div>

    <!-- FAQ -->
    <section class="faq">
      <div class="faq-image">
        <img src="/assets/img/10122026/IMG_5818.webp" width="500" height="333"
          alt="Cocoa harvest, a value chain Ngite Space works to make climate resilient" loading="lazy">
        <div class="faq-image-caption">
          <strong class="caption-title">Our Mission</strong>
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
            <h3>
              <button type="button" class="accordion-head" :aria-expanded="openFaq === index ? 'true' : 'false'"
                :aria-controls="`faq-panel-${index}`" @click="openFaq = openFaq === index ? -1 : index">
                <span class="accordion-question">{{ item.question }}</span>
                <span class="accordion-icon" aria-hidden="true"><i class="fas fa-chevron-down"></i></span>
              </button>
            </h3>
            <div class="accordion-panel" :id="`faq-panel-${index}`" role="region" :aria-label="item.question">
              <div class="accordion-body">
                <p>{{ item.answer }}</p>
              </div>
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
            <img :src="post.image" :alt="post.title" loading="lazy">
            <span class="news-tag">{{ post.tag }}</span>
          </div>
          <div class="news-body">
            <div class="news-meta">
              <span><i class="fas fa-user" aria-hidden="true"></i> {{ post.author }}</span>
              <span><i class="fas fa-tag" aria-hidden="true"></i> {{ post.category }}</span>
            </div>
            <h3><router-link :to="post.link">{{ post.title }}</router-link></h3>
            <router-link :to="post.link" class="service-link">Read More <i class="fas fa-arrow-right"
                aria-hidden="true"></i></router-link>
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
import { ref, onMounted, onUnmounted } from 'vue'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const statsRef = ref(null)
// Seeded with the real values so the prerendered HTML carries the numbers.
const stats = ref([
  { label: 'Priority Value Chains', value: 2, displayValue: 2, suffix: '+' },
  { label: 'Key Objectives', value: 7, displayValue: 7, suffix: '' },
  { label: 'Active Projects', value: 4, displayValue: 4, suffix: '' },
  { label: 'Sustainability Focus', value: 100, displayValue: 100, suffix: '%' }
])

let statsFrame

const animateStats = () => {
  if (prefersReducedMotion()) return
  const duration = 2000
  const start = performance.now()
  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1)
    stats.value.forEach(stat => {
      stat.displayValue = Math.floor(stat.value * progress)
    })
    if (progress < 1) statsFrame = requestAnimationFrame(step)
  }
  statsFrame = requestAnimationFrame(step)
}

const scrollToPaths = () => {
  document.querySelector('#paths')?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
}

let statsObserver

onMounted(() => {
  if (statsRef.value) {
    statsObserver = new IntersectionObserver((entries) => {
      if (entries.some(entry => entry.isIntersecting)) {
        animateStats()
        statsObserver.disconnect()
      }
    }, { threshold: 0.3 })
    statsObserver.observe(statsRef.value)
  }
})

onUnmounted(() => {
  if (statsObserver) statsObserver.disconnect()
  if (statsFrame) cancelAnimationFrame(statsFrame)
})

const paths = [
  {
    icon: 'fas fa-handshake',
    title: 'Source Coffee & Cocoa',
    desc: 'For buyers, traders and export partners looking for sustainably sourced, traceable Ugandan supply.',
    points: ['Verified farmer groups & exporters', 'Quality & phyto-sanitary documentation', 'Logistics & market coordination'],
    link: '/services?category=sourcing',
    cta: 'Explore Sourcing',
    featured: false
  },
  {
    icon: 'fas fa-file-shield',
    title: 'Get EUDR Support',
    desc: 'For exporters who need deforestation-compliance documentation, farm mapping and risk assessment.',
    points: ['Farm mapping & polygon data', 'Due-diligence statement support', 'Risk assessment & monitoring'],
    link: '/eudr',
    cta: 'Get EUDR Help',
    featured: true
  },
  {
    icon: 'fas fa-wheat-awn',
    title: 'Farmer Training & Support',
    desc: 'For farmers and community organisations building climate resilience, food security and better incomes.',
    points: ['Climate-smart agronomy training', 'Post-harvest loss management', 'Community resilience programmes'],
    link: '/services?category=training',
    cta: 'See Training Programmes',
    featured: false
  }
]

const serviceGroups = [
  {
    label: 'Sourcing & Trade',
    desc: 'Connecting responsible buyers with verified Ugandan producers.',
    services: [
      {
        icon: 'fas fa-handshake',
        title: 'Buyer Representation',
        shortDesc: 'Sustainable sourcing representation for international coffee and cocoa buyers.',
        link: '/services?category=sourcing'
      },
      {
        icon: 'fas fa-clipboard-check',
        title: 'Quality Assurance',
        shortDesc: 'Third party quality assurance ensuring international standards for export products.',
        link: '/services?category=sourcing'
      }
    ]
  },
  {
    label: 'EUDR & Compliance',
    desc: 'Documentation, mapping and risk tools for deforestation-free supply chains.',
    services: [
      {
        icon: 'fas fa-file-shield',
        title: 'EUDR Due Diligence',
        shortDesc: 'Full support for EU Deforestation Regulation documentation and risk assessment.',
        link: '/eudr'
      },
      {
        icon: 'fas fa-earth-africa',
        title: 'GIS Services',
        shortDesc: 'Geospatial mapping for farm delineation and land-use monitoring.',
        link: '/services?category=compliance'
      }
    ]
  },
  {
    label: 'Training & Climate Action',
    desc: 'Building resilient farming communities and advocating for systemic change.',
    services: [
      {
        icon: 'fas fa-wheat-awn',
        title: 'Food Security Training',
        shortDesc: 'Resilience building through post-harvest loss management and training.',
        link: '/services?category=training'
      },
      {
        icon: 'fas fa-bullhorn',
        title: 'Climate Advocacy',
        shortDesc: 'Policy advocacy and public campaigns to drive systemic environmental change.',
        link: '/services?category=climate'
      }
    ]
  }
]

const projects = [
  // { image: '/assets/img/audit.JPG', tag: 'Climate', title: 'Ngite Climate Auditorium for Coffee & Cocoa Stakeholders' },
  { image: '/assets/img/New_Images/gettyimages-518782849-612x612.jpg', tag: 'Food Security', title: 'Food Security for Coffee & Cocoa Growing Communities' },
  { image: '/assets/img/women.jpeg', tag: 'Gender & Climate', title: 'Women for Climate Action' },
  { image: '/assets/img/climate-change/event_card_img_1.jpg', tag: 'Environment', title: 'Responsible Waste Disposal' }
]

const openFaq = ref(0)
const faqs = [
  {
    question: "How does climate change impact coffee quality?",
    answer: "Climate change significantly affects coffee quality; from flavor and aroma to bean size. Drought conditions stress plants, leading to smaller beans. Higher temperatures cause faster ripening, reducing time for complex flavor development, and also trigger pest outbreaks that reduce yields."
  },
  {
    question: "What causes climate change?",
    answer: "The primary cause is the increase in greenhouse gases; carbon dioxide, methane, and nitrous oxide; in the atmosphere. These gases trap heat, leading to global warming and climate disruption across ecosystems worldwide."
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
    image: '/assets/img/10122026/IMG_5719.webp',
    tag: 'Environment',
    author: 'Ngite Space',
    category: 'Regulation',
    title: 'European Union Deforestation Regulation (EUDR) | What It Means for Uganda',
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
    image: '/assets/img/New_Images/image_2.jpg',
    tag: 'Partnership',
    author: 'Ngite Space',
    category: 'Partnership',
    title: 'Ngite Space Partnership',
    link: '/partnership'
  }
]
</script>

<style scoped>
/* Scoped styles are handled by main.css for now */
</style>
