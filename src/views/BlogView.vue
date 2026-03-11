<template>
  <main class="blog-page">
    <!-- PAGE HERO -->
    <section class="page-hero">
      <div class="page-hero-bg" id="heroBg"></div>
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <ol class="breadcrumb">
          <li><router-link to="/">Home</router-link></li>
          <li class="sep">Blog</li>
        </ol>
        <h1>News &amp; <em>Updates</em></h1>
        <p>Insights, research, and stories from the field — follow our journey in climate action and sustainable development.</p>
      </div>
    </section>

    <!-- BLOG SECTION -->
    <section class="blog-section">
      <div class="blog-header">
        <span class="section-label">Our Blog</span>
        <h2 class="section-title">Latest <em>Articles</em></h2>
        <p class="section-desc">Explore our latest publications and updates on environmental regulations, climate projects, and community partnerships.</p>
      </div>

      <div class="blog-grid">
        <article v-for="post in posts" :key="post.title" class="blog-card">
          <router-link :to="post.link" class="blog-thumb">
            <span class="blog-meta">{{ post.category }}</span>
            <img :src="post.image" :alt="post.title">
          </router-link>
          <div class="blog-content">
            <span class="blog-date">{{ post.date }}</span>
            <h3 class="blog-title">
              <router-link :to="post.link">{{ post.title }}</router-link>
            </h3>
            <p class="blog-excerpt">{{ post.excerpt }}</p>
            <router-link :to="post.link" class="blog-link">
              {{ post.linkText }} <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
        </article>
      </div>
    </section>

    <!-- NEWSLETTER SECTION -->
    <section class="newsletter-section">
      <div class="newsletter-content">
        <h2>Subscribe to our <em>Newsletter</em></h2>
        <p>Join our community to receive the latest updates on climate action, new publications, and upcoming events directly in your inbox.</p>
        <form class="newsletter-form" @submit.prevent="handleSubscribe">
          <input type="email" class="newsletter-input" placeholder="Enter your email address" required v-model="email">
          <button type="submit" class="newsletter-btn" :disabled="subscribed">
            {{ subscribed ? 'Subscribed!' : 'Subscribe Now' }}
          </button>
        </form>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const subscribed = ref(false)

const posts = [
  {
    category: 'Publication',
    image: '/assets/img/New_Images/step-3-990x_.webp',
    date: 'Feb 10, 2026',
    title: 'Climate Change & Resource Sustainability',
    excerpt: 'Exploring EUDR awareness among coffee stakeholders in Kyarumba Sub-County, Kasese District.',
    link: '/publication_01',
    linkText: 'Read Publication'
  },
  {
    category: 'Regulation',
    image: '/assets/img/forest.jpg',
    date: 'Jan 25, 2026',
    title: 'EU Deforestation Regulation (EUDR)',
    excerpt: 'Understanding the new EU requirements for coffee and cocoa exports. What traders and producers need to know.',
    link: '/eudr',
    linkText: 'Read Article'
  },
  {
    category: 'Community',
    image: '/assets/img/image_2.jpg',
    date: 'Dec 14, 2025',
    title: 'New Partnerships for 2026',
    excerpt: "We're thrilled to announce new strategic partnerships aimed at expanding our food security initiatives.",
    link: '/blog',
    linkText: 'Coming Soon'
  }
]

const handleSubscribe = () => {
  subscribed.value = true
  email.value = ''
  setTimeout(() => {
    subscribed.value = false
  }, 3000)
}
</script>

<style scoped>
.page-hero {
  position: relative;
  padding: 160px 80px 100px;
  background: var(--forest);
  color: #fff;
  text-align: center;
  overflow: hidden;
}

.page-hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(26, 61, 43, 0.7);
}

.page-hero-content {
  position: relative;
  z-index: 2;
}

.breadcrumb {
  display: flex;
  justify-content: center;
  gap: 10px;
  list-style: none;
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.breadcrumb a {
  color: var(--gold);
  text-decoration: none;
}

.breadcrumb .sep::before {
  content: '—';
  margin-right: 10px;
}

.page-hero h1 {
  font-family: var(--heading-font);
  font-size: 3.5rem;
}

.page-hero h1 em {
  font-style: italic;
  color: var(--gold);
}

.blog-section {
  padding: 100px 80px;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 60px;
}

.blog-card {
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #eee;
  transition: transform 0.3s;
}

.blog-card:hover {
  transform: translateY(-10px);
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
}

.blog-date {
  color: var(--sage);
  font-size: 0.85rem;
  font-weight: 700;
}

.blog-title {
  font-family: var(--heading-font);
  font-size: 1.5rem;
  margin: 10px 0 15px;
}

.blog-title a {
  color: var(--forest);
  text-decoration: none;
}

.blog-excerpt {
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.blog-link {
  color: var(--forest);
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
}

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

@media (max-width: 900px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
  .newsletter-form {
    flex-direction: column;
  }
}
</style>
