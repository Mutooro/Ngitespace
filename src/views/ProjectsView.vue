<template>
  <main class="projects-page">
    <!-- PAGE HERO -->
    <section class="page-hero">
      <div class="page-hero-bg" id="heroBg"></div>
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <ol class="breadcrumb">
          <li><router-link to="/">Home</router-link></li>
          <li class="sep">Projects</li>
        </ol>
        <h1>Our <em>Projects</em></h1>
        <p>Climate action through community empowerment — driving change across Uganda's coffee and cocoa growing regions.</p>
      </div>
    </section>

    <!-- IMPACT STATS -->
    <div class="impact-strip" ref="impactRef">
      <div v-for="stat in impactStats" :key="stat.label" class="impact-stat">
        <span class="impact-number">{{ stat.displayValue }}<span v-if="stat.suffix">{{ stat.suffix }}</span></span>
        <span class="impact-label">{{ stat.label }}</span>
      </div>
    </div>

    <!-- PROJECTS SECTION -->
    <section class="projects-section">
      <div class="projects-header">
        <span class="section-label">What We Do</span>
        <h2 class="section-title">We Currently Run the Following <em>Projects</em></h2>
        <p class="section-desc">Each initiative is designed to create lasting impact at the intersection of environmental sustainability and community wellbeing.</p>
      </div>

      <div class="project-grid">
        <div v-for="(project, index) in projects" :key="index" class="project-card">
          <div class="project-img">
            <span class="project-number">{{ index + 1 }}</span>
            <span class="project-tag">{{ project.tag }}</span>
            <img :src="project.image" :alt="project.title">
          </div>
          <div class="project-info">
            <span class="info-label">Project {{ project.numText }}</span>
            <h3>{{ project.title }} <em>{{ project.titleAccent }}</em></h3>
            <p v-for="(p, pIndex) in project.paragraphs" :key="pIndex">{{ p }}</p>
            <div class="project-highlight">
              <i :class="project.highlightIcon"></i>
              {{ project.highlightText }}
            </div>
            <div class="project-actions">
              <router-link to="/donate" class="btn-donate"><i class="fas fa-heart"></i> Donate Now</router-link>
              <router-link to="/contact" class="btn-learn"><i class="fas fa-arrow-right"></i> Learn More</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PARTNER STRIP -->
    <div class="partner-strip">
      <h3>Working Together for a <em style="font-style:italic; color:var(--gold);">Greener</em> Future</h3>
      <p>Our projects are made possible through the generous support of partners, donors, and committed community members across Uganda and beyond.</p>
    </div>

    <!-- CTA -->
    <div class="cta-banner">
      <h2>Want to support our <em>projects</em> and make a difference?</h2>
      <div class="cta-actions">
        <router-link to="/donate" class="btn-gold-lg"><i class="fas fa-heart" style="margin-right:6px;"></i> Donate Now</router-link>
        <router-link to="/contact" class="btn-white">Contact Us</router-link>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const impactRef = ref(null)

const impactStats = ref([
  { value: 4, displayValue: 0, label: 'Active Projects' },
  { value: 100, displayValue: 0, label: 'Households Supported', suffix: '+' },
  { value: 5000, displayValue: 0, label: 'MT Waste Processed Daily', suffix: '+' },
  { value: 3, displayValue: 0, label: 'Districts Reached' }
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

onMounted(() => {
  setupImpactObserver()
})

const projects = [
  {
    numText: 'One',
    tag: 'Climate Education',
    image: '/assets/img/audit.JPG',
    title: 'Ngite Climate',
    titleAccent: 'Auditorium',
    paragraphs: [
      'This project is designed to disseminate climate ideas that are worth spreading. We organize public plays, performances and presentations that are uniquely designed to convey an environmental action agenda.',
      'The performances are open to the stakeholders in the coffee and cocoa value chains who become the audience to learn and unlearn the climatic misinformation in the form of performing arts and plays.'
    ],
    highlightIcon: 'fas fa-location-dot',
    highlightText: 'Venue is currently mobile — check for the next Climate Auditorium event!'
  },
  {
    numText: 'Two',
    tag: 'Food Security',
    image: '/assets/img/others/card_img_3.jpg',
    title: 'Food Security for Coffee & Cocoa Growing',
    titleAccent: 'Communities',
    paragraphs: [
      'Climate change injustices have caused food insecurity and the associated issues of malnutrition in highly vulnerable communities. Ngite Space supports coffee and cocoa producing communities that are hit hardest by climate change catastrophes.',
      'We support through community education on sustainable agricultural technologies like irrigation, and through giving physical food items to the most affected in the worst scenarios.'
    ],
    highlightIcon: 'fas fa-users',
    highlightText: 'Currently working with 100 households in Kasese district'
  },
  {
    numText: 'Three',
    tag: 'Gender & Climate',
    image: '/assets/img/women.jpeg',
    title: 'Women for',
    titleAccent: 'Climate',
    paragraphs: [
      'Putting women and girls under the cocoa and coffee value chains in the drive for environmental protection has potential to change the narrative. Women are the mothers and their ethics easily get passed onto the next generations.',
      'Ngite Space has designed a Girls\' methodology to ensure their active involvement in environmental restoration and protection movements.'
    ],
    highlightIcon: 'fas fa-venus',
    highlightText: 'Empowering women and girls as climate action leaders'
  },
  {
    numText: 'Four',
    tag: 'Waste Management',
    image: '/assets/img/others/card_img_2.jpg',
    title: 'Responsible',
    titleAccent: 'Waste',
    paragraphs: [
      'We collect domestic and industrial waste, sort it and help to dispose it in a more responsible way. The way waste is treated prior to disposal greatly determines the amount of Greenhouse Gas emissions released.',
      'Under this project we aim at making use of the cradle-to-cradle principle, making waste a raw material for new products through cleaner production innovations.'
    ],
    highlightIcon: 'fas fa-recycle',
    highlightText: 'More than 5,000 MT of waste released daily'
  }
]
</script>

<style scoped>
/* All styles are defined globally in main.css */
</style>
