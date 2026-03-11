<template>
  <main class="eudr-page">
    <!-- Reading Progress Bar -->
    <div class="reading-progress" :style="{ width: scrollProgress + '%' }"></div>

    <!-- PAGE HERO -->
    <section class="page-hero">
      <div class="page-hero-bg" id="heroBg" :style="{ transform: `translateY(${heroScroll * 0.3}px)` }"></div>
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <ol class="breadcrumb">
          <li><router-link to="/">Home</router-link></li>
          <li class="sep"><router-link to="/services">Services</router-link></li>
          <li class="sep">EUDR Compliance</li>
        </ol>
        <h1>EU Deforestation <em>Regulation</em></h1>
        <div class="hero-meta">
          <span><i class="fas fa-shield-halved"></i> EUDR Compliance Guide</span>
          <span><i class="fas fa-tag"></i> Regulation · Trade Policy</span>
          <span><i class="fas fa-clock"></i> 10 min read</span>
        </div>
      </div>
    </section>

    <!-- ARTICLE LAYOUT -->
    <div class="article-layout">
      <!-- MAIN CONTENT -->
      <article class="article-content">
        <div class="article-feature-img">
          <img src="/assets/img/New_Images/eudr.webp" alt="Deforestation and forest conservation">
        </div>

        <p class="lead-text">The EU Deforestation Regulation bans the importation of items associated with deforestation internationally in order to lessen the carbon footprint of the EU with respect to imported agricultural products.</p>

        <p>The EU will use satellite imagery and remote sensing technologies to ascertain if EU imports and exports, namely agricultural items entering and/or leaving the EU, are connected to deforestation. Coffee and cocoa stakeholders must therefore comply with this mandatory regulation providing geo-locations of their plots of land.</p>

        <p>The regulation focuses mainly on land deforested after 31st December, 2020 and will take effect from December 2025 for large companies and 30 June 2026 for micro- and small enterprises.</p>

        <!-- Key Dates Callout -->
        <div class="key-dates">
          <h4><i class="fas fa-calendar-check"></i> Key Implementation Dates</h4>
          <div class="date-item">
            <div class="date-label">Entered into force</div>
            <div class="date-value">June 29, 2023</div>
          </div>
          <div class="date-item">
            <div class="date-label">Cutoff date</div>
            <div class="date-value">December 31, 2020</div>
            <div class="date-desc">Land deforested after this date</div>
          </div>
          <div class="date-item">
            <div class="date-label">Large companies</div>
            <div class="date-value">Dec 30, 2025</div>
            <div class="date-desc">Full compliance required</div>
          </div>
          <div class="date-item">
            <div class="date-label">SMEs</div>
            <div class="date-value">June 30, 2026</div>
            <div class="date-desc">Micro &amp; small enterprises</div>
          </div>
        </div>

        <h3 id="section-details"><i class="fas fa-file-lines"></i> Details</h3>
        <p>The European Union Deforestation Regulation (EUDR) is aimed at guaranteeing that the select products sold or produced within the EU do not contribute to deforestation or forest degradation worldwide.</p>
        <p>The EUDR currently focuses on the import and export of seven key commodities to/from the European Union that are considered to have the largest impacts on global deforestation — cattle, soy, palm oil, wood/timber, coffee, cocoa, and rubber — and certain products derived from these commodities.</p>

        <h3 id="section-compliance"><i class="fas fa-clipboard-check"></i> What Companies Need to Do</h3>
        <ul class="checklist">
          <li><strong>Understand scope</strong> — of all products and suppliers.</li>
          <li><strong>Establish traceability</strong> — obtain GPS coordinates of all plots of land.</li>
          <li><strong>Assess risk</strong> — based on criteria including deforestation pressures.</li>
          <li><strong>Take mitigation actions</strong> — ensure negligible risk.</li>
          <li><strong>Submit due diligence statement</strong> — to centralized registry.</li>
        </ul>

        <h3 id="section-oversight"><i class="fas fa-gavel"></i> Oversight & Penalties</h3>
        <p>Competent authorities in each EU member state will monitor compliance through spot checks and reviews. Products found to have a high risk of non-compliance may be held in customs while due diligence checks are completed.</p>

        <!-- Comment Section -->
        <div class="comment-section">
          <h3>Share Your <em style="font-style:italic; color:var(--gold);">Thoughts</em></h3>
          <p>Your email address will not be published. Required fields are marked *</p>
          <form class="comment-form" @submit.prevent="handleComment">
            <textarea placeholder="Write your comment *" required v-model="commentData.text"></textarea>
            <div class="form-row">
              <input type="text" placeholder="Your Name *" required v-model="commentData.name">
              <input type="email" placeholder="Your Email *" required v-model="commentData.email">
            </div>
            <button type="submit" class="comment-submit" :disabled="isSubmitting">
              <span v-if="submitted"><i class="fas fa-check"></i> Comment Submitted!</span>
              <span v-else>Post Comment <i class="fas fa-paper-plane"></i></span>
            </button>
          </form>
        </div>
      </article>

      <!-- SIDEBAR -->
      <aside class="article-sidebar">
        <!-- TOC -->
        <div class="sidebar-card">
          <h4><i class="fas fa-list" style="margin-right:8px; color:var(--sage);"></i> In This Article</h4>
          <ul class="toc-list">
            <li><a href="#section-details" @click.prevent="scrollTo('section-details')"><i class="fas fa-circle"></i> EUDR Details</a></li>
            <li><a href="#section-compliance" @click.prevent="scrollTo('section-compliance')"><i class="fas fa-circle"></i> Compliance Requirements</a></li>
            <li><a href="#section-oversight" @click.prevent="scrollTo('section-oversight')"><i class="fas fa-circle"></i> Oversight &amp; Penalties</a></li>
          </ul>
        </div>

        <div class="sidebar-card">
          <h4>7 Key Commodities</h4>
          <ul class="commodities-list">
            <li><i class="fas fa-mug-hot"></i> Coffee</li>
            <li><i class="fas fa-seedling"></i> Cocoa</li>
            <li><i class="fas fa-cow"></i> Cattle</li>
            <li><i class="fas fa-droplet"></i> Palm Oil</li>
            <li><i class="fas fa-leaf"></i> Soy</li>
            <li><i class="fas fa-tree"></i> Wood</li>
            <li><i class="fas fa-circle-nodes"></i> Rubber</li>
          </ul>
        </div>

        <!-- CTA -->
        <div class="sidebar-card sidebar-cta">
          <h4><i class="fas fa-shield-halved" style="margin-right:8px; color:var(--gold);"></i> Need Help?</h4>
          <p>Ngite Space supports companies in meeting EUDR requirements through documentation, GIS mapping and risk assessment.</p>
          <router-link to="/contact" class="sidebar-cta-btn">
            <i class="fas fa-arrow-right"></i> Get EUDR Support
          </router-link>
        </div>
      </aside>
    </div>

    <!-- CTA -->
    <div class="cta-banner">
      <h2>Need help with <em>EUDR compliance</em>?</h2>
      <div class="cta-actions">
        <router-link to="/contact" class="btn-gold">Get In Touch</router-link>
        <router-link to="/services" class="btn-white">Our Services</router-link>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollProgress = ref(0)
const heroScroll = ref(0)
const submitted = ref(false)
const isSubmitting = ref(false)
const commentData = ref({
  text: '',
  name: '',
  email: ''
})

const handleScroll = () => {
  const scrollY = window.scrollY
  heroScroll.value = scrollY
  
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  if (docHeight > 0) {
    scrollProgress.value = (scrollY / docHeight) * 100
  }
}

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleComment = () => {
  isSubmitting.value = true
  setTimeout(() => {
    submitted.value = true
    isSubmitting.value = false
    commentData.value = { text: '', name: '', email: '' }
    setTimeout(() => {
      submitted.value = false
    }, 3000)
  }, 1000)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* All styles are defined globally in main.css */
</style>
