<template>
  <section class="home-hero" aria-labelledby="home-hero-title">
    <div class="home-hero-image" aria-hidden="true"></div>
    <div class="home-hero-shade" aria-hidden="true"></div>

    <div class="home-container home-hero-content">
      <p class="home-hero-eyebrow">
        <span class="home-eyebrow-dot" aria-hidden="true"></span>
        Uganda · Coffee &amp; cocoa value chains
      </p>
      <h1 id="home-hero-title">Home of <em>greener</em><br />value chains.</h1>
      <p class="home-hero-description">
        Ngite Space connects producers, traders, and climate advocates to build cleaner, more resilient coffee and cocoa value chains across Uganda.
      </p>
      <div class="home-hero-actions">
        <router-link to="/about" class="home-button home-button-gold">
          Discover our approach
          <i class="fas fa-arrow-right" aria-hidden="true"></i>
        </router-link>
        <router-link to="/services" class="home-button home-button-outline">Explore our services</router-link>
      </div>
    </div>

    <div class="home-container home-hero-bottom">
      <span>Grounded in Uganda. Connected to the world.</span>
      <a href="#home-impact" class="home-scroll-link">
        <span class="home-scroll-line" aria-hidden="true"></span>
        Scroll to explore
      </a>
    </div>
  </section>
</template>
