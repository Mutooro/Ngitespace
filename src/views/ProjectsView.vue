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
    <section class="blog-section">
      <div class="blog-header">
        <span class="section-label">What We Do</span>
        <!-- <h3 class="section-title">We Currently Run the Following <em>Projects</em></h3> -->
        <p class="section-desc">Each initiative is designed to create lasting impact at the intersection of environmental sustainability and community wellbeing.</p>
      </div>

      <div class="blog-grid">
        <article v-for="(project, index) in projects" :key="index" class="blog-card">
          <div class="blog-thumb">
            <span class="blog-meta">{{ project.tag }}</span>
            <img :src="project.image" :alt="project.title">
          </div>
          <div class="blog-content">
            <span class="blog-date">Project {{ project.numText }}</span>
            <h3 class="blog-title">
              {{ project.title }} <em>{{ project.titleAccent }}</em>
            </h3>
            <p class="blog-excerpt">{{ project.paragraphs[0] }}</p>
            
            <div class="project-highlight-mini">
              <i :class="project.highlightIcon"></i>
              <span>{{ project.highlightText }}</span>
            </div>

            <div class="project-actions-mini">
              <router-link to="/donate" class="btn-donate-mini"><i class="fas fa-heart" style="margin-right:6px;"></i> Donate Now</router-link>
              <router-link to="/contact" class="blog-link" style="color:var(--sage);"><i class="fas fa-arrow-right" style="margin-right:4px;"></i> Learn More</router-link>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- PARTNER STRIP -->
    <div class="partner-strip">
      <h3>Working Together for a <em style="font-style:italic; color:var(--gold);">Greener</em> Future</h3>
      <p>Our projects are made possible through the generous support of partners, donors, and committed community members across Uganda and beyond.</p>
    </div>

    <!-- CTA -->
    <section class="newsletter-section">
      <div class="newsletter-content">
        <h2>Want to support our <em>projects</em>?</h2>
        <p>Make a difference today by contributing to our initiatives or partnering with us to expand our impact.</p>
        <div class="newsletter-form" style="justify-content: center;">
          <router-link to="/donate" class="newsletter-btn" style="text-decoration:none; display:inline-flex; align-items:center; height:50px;"><i class="fas fa-heart" style="margin-right:6px;"></i> Donate Now</router-link>
          <router-link to="/contact" class="newsletter-input" style="text-decoration:none; text-align:center; background:#fff; color:var(--forest); font-weight:700; max-width:200px; display:inline-flex; align-items:center; justify-content:center;">Contact Us</router-link>
        </div>
      </div>
    </section>
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
      'This project is designed to disseminate climate ideas that are worth spreading. We organize public plays, performances and presentations that convey an environmental action agenda.'
    ],
    highlightIcon: 'fas fa-location-dot',
    highlightText: 'Mobile Venue'
  },
  {
    numText: 'Two',
    tag: 'Food Security',
    image: '/assets/img/others/card_img_3.jpg',
    title: 'Food Security for Coffee',
    titleAccent: 'Communities',
    paragraphs: [
      'Climate change injustices have caused food insecurity. Ngite Space supports communities that are hit hardest by climate change catastrophes through sustainable ag-tech education.'
    ],
    highlightIcon: 'fas fa-users',
    highlightText: '100 households in Kasese'
  },
  {
    numText: 'Three',
    tag: 'Gender & Climate',
    image: '/assets/img/women.jpeg',
    title: 'Women for',
    titleAccent: 'Climate',
    paragraphs: [
      'Putting women and girls under the cocoa and coffee value chains in the drive for environmental protection has potential to change the narrative.'
    ],
    highlightIcon: 'fas fa-venus',
    highlightText: 'Empowering women as leaders'
  },
  {
    numText: 'Four',
    tag: 'Waste Management',
    image: '/assets/img/others/card_img_2.jpg',
    title: 'Responsible',
    titleAccent: 'Waste',
    paragraphs: [
      'We collect domestic and industrial waste, sort it and help to dispose it in a more responsible way. Under this project we aim at making use of the cradle-to-cradle principle.'
    ],
    highlightIcon: 'fas fa-recycle',
    highlightText: '5,000 MT waste released daily'
  }
]
</script>

<style scoped>
/* ─── IMPACT STRIP ─── */
.impact-strip {
  background: var(--forest);
  position: relative;
  display: flex;
  justify-content: space-around;
  padding: 60px 48px;
  margin-top: -40px;
  z-index: 10;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  flex-wrap: wrap;
  gap: 30px;
}

.impact-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
}

.impact-number {
  font-family: var(--heading-font);
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--gold);
  line-height: 1;
}

.impact-label {
  color: #fff;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  opacity: 0.9;
}

/* ─── BLOG-STYLE PROJECTS SECTION ─── */
.blog-section {
  padding: 100px 80px;
}

.blog-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.section-label {
  display: inline-block;
  color: var(--sage);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.section-title {
  font-family: var(--heading-font);
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 700;
  color: var(--forest);
  line-height: 1.2;
  margin-bottom: 24px;
}

.section-title em {
  font-style: italic;
  color: var(--gold);
}

.section-desc {
  color: var(--muted);
  font-size: 1.1rem;
  line-height: 1.8;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 60px;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
}

.blog-card {
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #eee;
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
}

.blog-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
}

.blog-thumb {
  position: relative;
  display: block;
  overflow: hidden;
}

.blog-thumb img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  transition: transform 0.5s;
}

.blog-card:hover .blog-thumb img {
  transform: scale(1.1);
}

.blog-meta {
  position: absolute;
  top: 20px;
  left: 20px;
  background: var(--gold);
  color: var(--forest);
  padding: 5px 15px;
  font-size: 0.8rem;
  font-weight: 700;
  border-radius: 2px;
  z-index: 1;
}

.blog-content {
  padding: 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.blog-date {
  color: var(--sage);
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.blog-title {
  font-family: var(--heading-font);
  font-size: 1.5rem;
  margin: 10px 0 15px;
  line-height: 1.3;
}

.blog-excerpt {
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.6;
  flex: 1;
}

/* ─── MINI HIGHLIGHTS INSIDE BLOG CARDS ─── */
.project-highlight-mini {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 20px 0;
  padding: 12px 16px;
  background: var(--offwhite);
  border-left: 3px solid var(--sage);
  color: var(--forest);
  font-size: 0.9rem;
  font-weight: 600;
}

.project-highlight-mini i {
  color: var(--sage);
  font-size: 1.1rem;
}

.project-actions-mini {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 10px;
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.btn-donate-mini {
  background: var(--gold);
  color: var(--forest);
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s;
}

.btn-donate-mini:hover {
  background: #e0bc62;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(201, 168, 76, 0.3);
}

.blog-link {
  color: var(--forest);
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  transition: opacity 0.2s;
}

.blog-link:hover {
  opacity: 0.8;
}

/* ─── PARTNER STRIP ─── */
.partner-strip {
  background: var(--offwhite);
  padding: 80px 48px;
  text-align: center;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.partner-strip h3 {
  font-family: var(--heading-font);
  font-size: 2.2rem;
  color: var(--forest);
  margin-bottom: 16px;
}

.partner-strip p {
  color: var(--muted);
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
}

/* ─── NEWSLETTER / CTA ─── */
.newsletter-section {
  padding: 100px 80px;
  background: var(--forest);
  color: #fff;
  text-align: center;
}

.newsletter-content {
  max-width: 600px;
  margin: 0 auto;
}

.newsletter-content h2 {
  font-family: var(--heading-font);
  font-size: clamp(2rem, 3vw, 2.5rem);
  margin-bottom: 16px;
}

.newsletter-content h2 em {
  color: var(--gold);
  font-style: italic;
}

.newsletter-form {
  display: flex;
  gap: 10px;
  margin-top: 40px;
}

.newsletter-input {
  flex: 1;
  padding: 15px 20px;
  border-radius: 4px;
  border: none;
}

.newsletter-btn {
  background: var(--gold);
  color: var(--forest);
  padding: 0 30px;
  border-radius: 4px;
  border: none;
  font-weight: 700;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .blog-section {
    padding: 60px 24px;
  }
  .blog-grid {
    grid-template-columns: 1fr;
  }
  .impact-strip {
    margin: -40px 24px 0;
  }
  .newsletter-section {
    padding: 60px 24px;
  }
  .newsletter-form {
    flex-direction: column;
  }
}
</style>
