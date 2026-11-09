<template>
  <main class="gallery-page">
    <!-- PAGE HERO -->
    <section class="page-hero">
      <div class="page-hero-bg" id="heroBg"></div>
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <Breadcrumbs />
        <h1>Photo <em>Gallery</em></h1>
      </div>
    </section>

    <!-- GALLERY SECTION -->
    <section class="gallery-section">
      <div class="gallery-header">
        <span class="section-label">Our Moments</span>
        <h2 class="section-title">Photo <em>Gallery</em></h2>
      </div>

      <div class="gallery-grid">
        <button
          v-for="(image, index) in galleryImages"
          :key="image.src"
          type="button"
          class="gallery-item"
          :aria-label="`Open full-size photo: ${image.alt}`"
          @click="showImg(index)"
        >
          <img :src="image.src" :alt="image.alt" loading="lazy">
          <div class="gallery-overlay">
            <i class="fas fa-search-plus" aria-hidden="true"></i>
          </div>
        </button>
      </div>
    </section>

    <!-- LIGHTBOX -->
    <VueEasyLightbox
      :visible="visibleRef"
      :imgs="imgsRef"
      :index="indexRef"
      @hide="handleHide"
    />

    <!-- CTA SECTION -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Want to see more of our <em>work</em>?</h2>
        <p>Follow us on social media for more updates, photos, and stories from our projects across Uganda.</p>
        <div class="social-links">
          <a href="https://instagram.com/ngite_space" target="_blank" rel="noopener" class="social-btn">
            <i class="fab fa-instagram" aria-hidden="true"></i> Instagram
          </a>
          <a href="https://x.com/ngitespace" target="_blank" rel="noopener" class="social-btn">
            <i class="fab fa-twitter" aria-hidden="true"></i> Twitter
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import Breadcrumbs from '../components/Breadcrumbs.vue'
import { ref } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

const galleryImages = ref([
  {
    src: '/assets/img/New_Images/gettyimages-518782849-612x612.jpg',
    alt: 'Coffee farming in Uganda'
  },
  {
    src: '/assets/img/New_Images/gettyimages-518782849-612x612.jpg',
    alt: 'Cocoa plantation'
  },
  {
    src: '/assets/img/New_Images/test_1.JPG',
    alt: 'Farmers at work'
  },
  {
    src: '/assets/img/New_Images/test_1.JPG',
    alt: 'Coffee harvesting'
  },
  {
    src: '/assets/img/New_Images/image_2.jpg',
    alt: 'Climate project'
  },
  {
    src: '/assets/img/New_Images/image_2.jpg',
    alt: 'Environmental action'
  },
  {
    src: '/assets/img/New_Images/image_2.jpg',
    alt: 'Natural landscape'
  },
  {
    src: '/assets/img/New_Images/image_2.jpg',
    alt: 'Forest conservation'
  },
  {
    src: '/assets/img/New_Images/image_2.jpg',
    alt: 'Community event'
  }
])

const visibleRef = ref(false)
const indexRef = ref(0)
const imgsRef = ref(galleryImages.value.map(img => img.src))

const showImg = (index) => {
  indexRef.value = index
  visibleRef.value = true
}

const handleHide = () => {
  visibleRef.value = false
}
</script>

<style scoped>
.gallery-section {
  padding: 80px 48px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.gallery-header {
  text-align: center;
  margin-bottom: 60px;
}

.gallery-header .section-label {
  display: block;
  color: var(--sage);
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
}

.gallery-header .section-title {
  font-size: 42px;
  font-family: var(--heading-font);
  font-weight: 700;
  color: var(--charcoal);
  margin-bottom: 16px;
}

.gallery-header .section-title em {
  font-style: italic;
  color: var(--sage);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 80px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  aspect-ratio: 1;
  cursor: pointer;
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: var(--offwhite);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover img,
.gallery-item:focus-visible img {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(26, 61, 43, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay,
.gallery-item:focus-visible .gallery-overlay {
  opacity: 1;
}

.gallery-overlay i {
  font-size: 36px;
  color: white;
}

.cta-section {
  background: linear-gradient(135deg, var(--forest), var(--sage));
  color: white;
  padding: 80px 48px;
  text-align: center;
  margin: 0 48px;
  border-radius: 16px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 80px;
}

.cta-content h2 {
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 16px;
  font-family: var(--heading-font);
}

.cta-content em {
  color: var(--gold);
  font-style: italic;
}

.cta-content p {
  font-size: 16px;
  opacity: 0.95;
  margin-bottom: 32px;
}

.social-links {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: white;
  color: var(--forest);
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.social-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.social-btn i {
  font-size: 18px;
}

@media (max-width: 768px) {
  .gallery-section {
    padding: 60px 24px;
  }

  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
  }

  .cta-section {
    padding: 60px 24px;
    margin: 0 24px 60px;
  }

  .cta-content h2 {
    font-size: 28px;
  }

  .cta-content p {
    font-size: 14px;
  }
}
</style>
