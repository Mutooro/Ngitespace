<template>
  <main class="contact-page">
    <!-- PAGE HERO -->
    <section class="page-hero">
      <div class="page-hero-bg" id="heroBg"></div>
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <ol class="breadcrumb">
          <li><router-link to="/">Home</router-link></li>
          <li class="sep">Contact Us</li>
        </ol>
        <h1>Get In <em>Touch</em></h1>
      </div>
    </section>

    <!-- CONTACT INFO CARDS -->
    <section class="contact-cards">
      <div v-for="card in contactCards" :key="card.title" class="contact-card">
        <div class="contact-card-icon"><i :class="card.icon"></i></div>
        <h3>{{ card.title }}</h3>
        <p v-html="card.content"></p>
      </div>
    </section>

    <!-- CONTACT MAIN: FORM + SIDEBAR -->
    <section class="contact-main">
      <div class="form-wrap">
        <span class="section-label">Send Us a Message</span>
        <h2 class="section-title" style="margin-bottom: 32px;">We'd Love to <em>Hear From You</em></h2>
        <div class="form-container">
          <iframe
            src="https://tally.so/embed/w7zBoa?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy" width="100%" height="900" frameborder="0" marginheight="0" marginwidth="0"
            title="Get in touch with our team"></iframe>
        </div>
      </div>
      
      <div class="contact-sidebar">
        <div class="sidebar-card">
          <h4>Office Hours</h4>
          <ul class="sidebar-info">
            <li>
              <i class="fas fa-clock"></i>
              <div><strong style="color:var(--forest);">Monday – Friday</strong><br>8:00 AM – 5:00 PM EAT</div>
            </li>
            <li>
              <i class="fas fa-calendar-xmark"></i>
              <div><strong style="color:var(--forest);">Saturday & Sunday</strong><br>Closed</div>
            </li>
          </ul>
        </div>

        <div class="sidebar-card">
          <h4>Quick Contact</h4>
          <ul class="sidebar-info">
            <li>
              <i class="fas fa-map-marker-alt"></i>
              <div>Mutungo, Nakawa Division<br>P.O Box 188312, Kampala</div>
            </li>
            <li>
              <i class="fas fa-phone"></i>
              <div><a href="tel:+256779642488">+256 779 642 488</a></div>
            </li>
            <li>
              <i class="fas fa-envelope"></i>
              <div><a href="mailto:info@ngitespace.com">info@ngitespace.com</a></div>
            </li>
          </ul>
          <div class="sidebar-social">
            <a href="https://instagram.com/ngite_space" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://x.com/ngitespace" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
          </div>
        </div>

        <div class="sidebar-card dark-sidebar">
          <h4 style="color: #fff;">Why Reach Out?</h4>
          <ul class="why-list">
            <li v-for="reason in whyReachOut" :key="reason">
              <i class="fas fa-check-circle"></i> {{ reason }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- MAP SECTION -->
    <section class="map-section">
      <div class="map-header">
        <span class="section-label" style="color: var(--sage);">Find Us</span>
        <h2 class="section-title">Our <em>Location</em></h2>
        <p>Visit our office in Mutungo, Nakawa Division, Kampala</p>
      </div>
      <div class="map-embed">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7573851899975!2d32.6121!3d0.3217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb0000000001%3A0x1!2sMutungo%2C%20Kampala!5e0!3m2!1sen!2sug!4v1700000000000!5m2!1sen!2sug"
          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>

    <!-- CTA -->
    <div class="cta-banner">
      <h2>Ready to build <em>sustainable</em> value chains together?</h2>
      <div class="cta-actions">
        <router-link to="/services" class="btn-gold">Our Services</router-link>
        <router-link to="/about" class="btn-white">About Us</router-link>
      </div>
    </div>
  </main>
</template>

<script setup>
const contactCards = [
  { icon: 'fas fa-map-marker-alt', title: 'Office Location', content: 'Mutungo, Nakawa Division<br>P.O Box 188312, Kampala, Uganda' },
  { icon: 'fas fa-envelope', title: 'Email Address', content: '<a href="mailto:info@ngitespace.com">info@ngitespace.com</a>' },
  { icon: 'fas fa-phone', title: 'Phone Number', content: '<a href="tel:+256779642488">+256 779 642 488</a>' }
]

const whyReachOut = [
  'Sustainable sourcing partnerships',
  'EUDR compliance support',
  'Climate-smart agriculture training',
  'Coffee & cocoa buyer inquiries',
  'General inquiries & donations'
]
</script>

<style scoped>
/* All styles are defined globally in main.css */
</style>
