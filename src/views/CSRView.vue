<template>
  <main class="csr-page">
    <!-- PAGE HERO -->
    <section class="page-hero">
      <div class="page-hero-bg" id="heroBg"></div>
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <ol class="breadcrumb">
          <li><router-link to="/">Home</router-link></li>
          <li class="sep">Our CSR</li>
        </ol>
        <h1>Our Corporate <em>Social Responsibility</em></h1>
      </div>
    </section>

    <!-- CSR SECTION -->
    <section class="csr-grid-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our CSR initiatives focus on:</h2>
        </div>

        <div class="csr-grid">
          <div v-for="item in csrItems" :key="item.title" class="csr-card">
            <div class="csr-img">
              <img :src="item.image" :alt="item.title">
            </div>
            <div class="csr-content">
              <h3>{{ item.num }}. {{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <div class="cta-banner">
      <h2>Want to support our <em>social initiatives</em>?</h2>
      <div class="cta-actions">
        <router-link to="/contact" class="btn-gold">Get In Touch</router-link>
        <router-link to="/projects" class="btn-white">Our Projects</router-link>
      </div>
    </div>
  </main>
</template>

<script setup>
const csrItems = [
  {
    num: 1,
    title: 'Supporting Climate Change Disaster victims',
    image: '/assets/img/others/card_img_1.jpg',
    desc: 'At Ngite Space, we provide support to communities affected by climate-related disasters, such as floods, drought, and storms. We work with local authorities and NGOs to provide essential aid, including school bursaries, food, shelter, and medical care.'
  },
  {
    num: 2,
    title: 'School climate change clubs',
    image: '/assets/img/others/card_img_3.jpg',
    desc: 'We have established and supported climate change clubs in schools to educate students about the impacts of climate change and promote sustainability. We inspire the next generations of environmental leaders.'
  },
  {
    num: 3,
    title: 'Agroforestry and Tree planting',
    image: '/assets/img/forest.jpg',
    desc: 'Our tree planting initiatives aim at promoting environmental sustainability and mitigate climate change. Trees sequester carbon dioxide and produce oxygen, supporting biodiversity and ecosystem conservation.'
  },
  {
    num: 4,
    title: 'Responsible waste disposal',
    image: '/assets/img/others/card_img_2.jpg',
    desc: 'We collect domestic and industrial waste, sort it and help to dispose it in a more responsible way. This project is aimed at reducing Greenhouse Gases resulting from poor handling of waste.'
  }
]
</script>

<style scoped>
/* All styles are defined globally in main.css */
</style>
