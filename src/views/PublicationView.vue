<template>
  <main class="publication-page">
    <!-- Reading Progress Bar -->
    <div class="reading-progress" :style="{ width: scrollProgress + '%' }"></div>

    <!-- PAGE HERO -->
    <section class="page-hero">
      <div class="page-hero-bg" id="heroBg" :style="{ transform: `translateY(${heroScroll * 0.3}px)` }"></div>
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <ol class="breadcrumb">
          <li><router-link to="/">Home</router-link></li>
          <li class="sep"><router-link to="/blog">Blog</router-link></li>
          <li class="sep">Publication</li>
        </ol>
        <h1>Climate Change &amp; <em>Resource Sustainability</em></h1>
        <div class="hero-meta">
          <span><i class="fas fa-calendar-alt"></i> Ngite Space Research</span>
          <span><i class="fas fa-tag"></i> EUDR · Climate Policy</span>
          <span><i class="fas fa-clock"></i> 8 min read</span>
        </div>
      </div>
    </section>

    <!-- ARTICLE LAYOUT -->
    <div class="article-layout">
      <!-- MAIN CONTENT -->
      <article class="article-content">
        <p class="lead-text">Sustainable global trade increasingly demands accountability for environmental harm, especially deforestation tied to agricultural products like coffee. The EU Deforestation Regulation (EUDR), set to take effect in December 2024, requires products entering the EU to be traceable to land that has not been deforested.</p>

        <p>This presents a challenge for countries like Uganda, whose coffee exports heavily rely on the EU market.</p>

        <p>Despite efforts by both the Ugandan government and major coffee companies to meet EUDR requirements, deforestation continues to rise alongside coffee production. Without full compliance, Uganda risks having its coffee exports banned from the EU, threatening a vital source of foreign income and rural livelihoods.</p>

        <h3 id="section-awareness"><i class="fas fa-search"></i> The Awareness of the EUDR among Stakeholders</h3>

        <p>The European Union Deforestation Regulation (EUDR) has gained global attention since its adoption in June 2023. The regulation seeks to ensure that key commodities placed on the EU market are not linked to deforestation or forest degradation.</p>

        <p>Globally, awareness of the EUDR is uneven, with a significant information gap between high income and low income countries. Reports by international think tanks show that multinational companies and large scale commodity traders are generally aware of the EUDR and have started internal processes to align with its traceability requirements.</p>

        <div class="article-fade">
          <p>However, smallholder farmers, local cooperatives, and indigenous communities often remain unaware of the regulation's implications. The global discourse stresses the need for inclusive communication strategies to ensure that all actors understand what is at stake.</p>
        </div>

        <div class="read-more-cue"><i class="fas fa-arrow-down"></i> Download to read the full article</div>

        <!-- Download Card -->
        <div class="download-card">
          <h4><i class="fas fa-file-pdf" style="margin-right:8px;"></i> Download Full Publication</h4>
          <p>Get the complete research paper as a PDF document</p>
          <a href="/assets/files/climate_change_&_resource_sustainability.pdf" download class="download-btn">
            <i class="fas fa-download"></i> Download PDF
          </a>
        </div>

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
            <li><a href="#section-awareness" @click.prevent="scrollTo('section-awareness')"><i class="fas fa-circle"></i> EUDR Awareness</a></li>
            <li><a href="#"><i class="fas fa-circle"></i> Compliance Challenges</a></li>
            <li><a href="#"><i class="fas fa-circle"></i> Case Study</a></li>
          </ul>
        </div>

        <!-- Quick Download -->
        <div class="sidebar-card sidebar-download">
          <h4><i class="fas fa-file-arrow-down" style="margin-right:8px; color:var(--gold);"></i> Quick Download</h4>
          <p>Get the full research paper</p>
          <a href="/assets/files/climate_change_&_resource_sustainability.pdf" download class="download-btn">
            <i class="fas fa-download"></i> Download PDF
          </a>
        </div>

        <!-- Tags -->
        <div class="sidebar-card">
          <h4><i class="fas fa-tags" style="margin-right:8px; color:var(--sage);"></i> Topics</h4>
          <div class="tag-list">
            <router-link to="/blog" class="tag-item">EUDR</router-link>
            <router-link to="/blog" class="tag-item">Climate Change</router-link>
            <router-link to="/blog" class="tag-item">Coffee</router-link>
            <router-link to="/blog" class="tag-item">Deforestation</router-link>
            <router-link to="/blog" class="tag-item">Sustainability</router-link>
          </div>
        </div>
      </aside>
    </div>

    <!-- CTA -->
    <div class="cta-banner">
      <h2>Interested in <em>sustainable</em> trade research?</h2>
      <div class="cta-actions">
        <router-link to="/contact" class="btn-gold">Get In Touch</router-link>
        <router-link to="/blog" class="btn-white">More Articles</router-link>
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

