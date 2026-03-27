<template>
  <main class="not-found">
    <section class="page-hero">
      <div class="page-hero-bg" style="background-image: url('/assets/img/page_heading_bg.jpg');"></div>
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <h1>404 — Page <em>Not Found</em></h1>
        <p>Oops! The page you're looking for doesn't exist or has been moved.</p>
        <router-link to="/" class="btn-primary" style="margin-top: 24px;">
          Back to Home <i class="fas fa-arrow-right"></i>
        </router-link>
      </div>
    </section>
  </main>
</template>

<script setup>
// 404 Page for Ngite Space
</script>

<style scoped>
.not-found {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.page-hero {
  width: 100%;
  padding: 160px 0 100px;
  position: relative;
  overflow: hidden;
  background: var(--forest);
}

.page-hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0.4;
}

.page-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(26, 61, 43, 0.8), rgba(26, 61, 43, 0.5));
}

.page-hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-hero h1 {
  font-family: var(--heading-font);
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: #fff;
  margin-bottom: 20px;
}

.page-hero h1 em {
  font-style: italic;
  color: var(--gold);
}

.page-hero p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
}
</style>
