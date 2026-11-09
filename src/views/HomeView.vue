<template>
  <main class="home-page">
    <HomeHero />

    <section id="home-impact" class="home-impact" aria-label="Ngite Space at a glance">
      <div class="home-container home-impact-grid">
        <article v-for="stat in stats" :key="stat.label" class="home-impact-item">
          <p class="home-impact-value">{{ stat.value }}<span>{{ stat.suffix }}</span></p>
          <p class="home-impact-label">{{ stat.label }}</p>
        </article>
      </div>
    </section>

    <section id="about" class="home-section home-story" aria-labelledby="home-story-title">
      <div class="home-container home-story-grid">
        <div class="home-story-visual">
          <img
            class="home-story-main-image"
            src="/assets/img/New_Images/gettyimages-518782849-612x612.jpg"
            alt="Ugandan coffee farmer tending a coffee tree"
            loading="lazy"
          />
          <img
            class="home-story-accent-image"
            src="/assets/img/cocoa1.jpeg"
            alt="Cocoa beans ready for processing"
            loading="lazy"
          />
          <div class="home-origin-badge"><strong>Rooted</strong><span>in Uganda</span></div>
        </div>

        <div class="home-story-copy">
          <p class="home-kicker">Who we are</p>
          <h2 id="home-story-title" class="home-section-title">Growing a <em>sustainable</em> future for coffee &amp; cocoa.</h2>
          <p>
            Ngite Space Limited is an agro-processing and climate-focused company registered in Uganda (Reg. No. 80034879454906), dedicated to sustainable food production and responsible trade.
          </p>
          <p>
            We bridge producers, traders, consumers, and climate advocates — championing cleaner production and stronger value chains from local communities to global markets.
          </p>
          <ul class="home-values" aria-label="Our values">
            <li><i class="fas fa-check" aria-hidden="true"></i> Sustainability</li>
            <li><i class="fas fa-check" aria-hidden="true"></i> Collaboration</li>
            <li><i class="fas fa-check" aria-hidden="true"></i> Trust</li>
            <li><i class="fas fa-check" aria-hidden="true"></i> Accountability</li>
          </ul>
          <router-link to="/about" class="home-button home-button-dark">
            More about Ngite Space <i class="fas fa-arrow-right" aria-hidden="true"></i>
          </router-link>
        </div>
      </div>
    </section>

    <HomeServices :services="services" />

    <section class="home-section home-objectives" aria-labelledby="home-objectives-title">
      <div class="home-container home-objectives-layout">
        <div class="home-objectives-intro">
          <p class="home-kicker home-kicker-light">Our direction</p>
          <h2 id="home-objectives-title" class="home-section-title">Progress with<br /><em>purpose.</em></h2>
          <p>Our work is guided by clear, impact-driven objectives that shape every partnership, project, and programme across Uganda&apos;s coffee and cocoa sectors.</p>
          <router-link to="/about" class="home-light-link">The values behind our work <i class="fas fa-arrow-right" aria-hidden="true"></i></router-link>
        </div>
        <ol class="home-objective-list">
          <li v-for="(objective, index) in objectives" :key="objective">
            <span class="home-objective-number">{{ String(index + 1).padStart(2, '0') }}</span>
            <span>{{ objective }}</span>
          </li>
        </ol>
      </div>
    </section>

    <section class="home-section home-projects" aria-labelledby="home-projects-title">
      <div class="home-container">
        <div class="home-section-heading home-section-heading-spread">
          <div>
            <p class="home-kicker">On the ground</p>
            <h2 id="home-projects-title" class="home-section-title">Local action.<br /><em>Lasting impact.</em></h2>
          </div>
          <router-link to="/projects" class="home-text-link home-view-all">
            View all projects <i class="fas fa-arrow-right" aria-hidden="true"></i>
          </router-link>
        </div>

        <div class="home-project-grid">
          <router-link v-for="project in projects" :key="project.title" to="/projects" class="home-project-card">
            <img :src="project.image" alt="" loading="lazy" />
            <span class="home-project-shade" aria-hidden="true"></span>
            <span class="home-project-category">{{ project.tag }}</span>
            <span class="home-project-title">{{ project.title }}</span>
            <span class="home-project-link">See project <i class="fas fa-arrow-right" aria-hidden="true"></i></span>
          </router-link>
        </div>
      </div>
    </section>

    <HomeFaq :items="faqs" />

    <section class="home-section home-news" aria-labelledby="home-news-title">
      <div class="home-container">
        <div class="home-section-heading home-section-heading-spread">
          <div>
            <p class="home-kicker">Stay informed</p>
            <h2 id="home-news-title" class="home-section-title">Ideas for a<br /><em>greener future.</em></h2>
          </div>
          <router-link to="/blog" class="home-text-link home-view-all">
            Visit the journal <i class="fas fa-arrow-right" aria-hidden="true"></i>
          </router-link>
        </div>

        <div class="home-news-grid">
          <article v-for="post in news" :key="post.title" class="home-news-card">
            <router-link :to="post.link" class="home-news-image-link" :aria-label="`Read ${post.title}`">
              <img :src="post.image" :alt="post.imageAlt" loading="lazy" />
              <span class="home-news-category">{{ post.category }}</span>
            </router-link>
            <div class="home-news-copy">
              <p class="home-news-byline">{{ post.author }} <span aria-hidden="true">/</span> {{ post.topic }}</p>
              <h3><router-link :to="post.link">{{ post.title }}</router-link></h3>
              <router-link :to="post.link" class="home-text-link">Read the story <i class="fas fa-arrow-right" aria-hidden="true"></i></router-link>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="home-cta" aria-labelledby="home-cta-title">
      <div class="home-container home-cta-content">
        <div>
          <p class="home-kicker home-kicker-light">Let&apos;s build what&apos;s next</p>
          <h2 id="home-cta-title">A greener future is a <em>shared effort.</em></h2>
        </div>
        <div class="home-cta-actions">
          <router-link to="/contact" class="home-button home-button-gold">
            Start a conversation <i class="fas fa-arrow-right" aria-hidden="true"></i>
          </router-link>
          <router-link to="/services" class="home-light-link">Explore our services</router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import HomeFaq from '../components/HomeFaq.vue'
import HomeHero from '../components/HomeHero.vue'
import HomeServices from '../components/HomeServices.vue'

const stats = [
  { value: '2', suffix: '+', label: 'Priority value chains' },
  { value: '7', suffix: '', label: 'Impact objectives' },
  { value: '4', suffix: '', label: 'Active projects' },
  { value: '100', suffix: '%', label: 'Sustainability focus' },
]

const services = [
  {
    category: 'sourcing',
    icon: 'fas fa-chart-line',
    title: 'Trade & Analysis',
    shortDesc: 'Market insights that help value-chain partners make confident, data-informed decisions.',
    link: '/services',
  },
  {
    category: 'sourcing',
    icon: 'fas fa-handshake',
    title: 'Buyer Representation',
    shortDesc: 'A trusted local partner connecting international buyers with reliable Ugandan producers.',
    link: '/services',
  },
  {
    category: 'sourcing',
    icon: 'fas fa-clipboard-check',
    title: 'Quality Assurance',
    shortDesc: 'Independent quality checks to help coffee and cocoa meet international export standards.',
    link: '/services',
  },
  {
    category: 'sourcing',
    icon: 'fas fa-certificate',
    title: 'Phyto Sanitary Services',
    shortDesc: 'Export support that helps agricultural products meet plant health requirements.',
    link: '/services',
  },
  {
    category: 'compliance',
    icon: 'fas fa-file-shield',
    title: 'EUDR Due Diligence',
    shortDesc: 'Farm-level mapping, documentation, and risk assessment for EUDR readiness.',
    link: '/eudr',
  },
  {
    category: 'compliance',
    icon: 'fas fa-map-location-dot',
    title: 'Farm Data Management',
    shortDesc: 'Reliable farm data for supply-chain traceability and compliance decisions.',
    link: '/services',
  },
  {
    category: 'compliance',
    icon: 'fas fa-tree-circle-exclamation',
    title: 'Deforestation Analysis',
    shortDesc: 'Scientific risk analysis to support forest protection and responsible sourcing.',
    link: '/services',
  },
  {
    category: 'compliance',
    icon: 'fas fa-earth-africa',
    title: 'GIS Services',
    shortDesc: 'Farm mapping and land-use monitoring for clearer, more transparent supply chains.',
    link: '/services',
  },
  {
    category: 'climate',
    icon: 'fas fa-bullhorn',
    title: 'Climate Advocacy',
    shortDesc: 'Education and public campaigns that help move climate action forward.',
    link: '/services',
  },
  {
    category: 'training',
    icon: 'fas fa-wheat-awn',
    title: 'Food Security Training',
    shortDesc: 'Practical training in post-harvest management and climate resilience.',
    link: '/services',
  },
  {
    category: 'climate',
    icon: 'fas fa-microscope',
    title: 'Climate Research',
    shortDesc: 'Evidence-based research to inform sustainable agricultural practices.',
    link: '/services',
  },
]

const objectives = [
  'Supply sustainable and responsibly sourced coffee and cocoa.',
  'Help companies understand environmental impact and carbon obligations.',
  'Train farmers in climate-smart, post-harvest, and value-addition practices.',
  'Promote cleaner production in agro-food systems and daily life.',
  'Support communities most vulnerable to climate change.',
  'Conserve and restore ecosystems that sustain biodiversity and climate health.',
  'Advance climate education, research, and responsible agriculture.',
]

const projects = [
  { image: '/assets/img/audit.JPG', tag: 'Climate action', title: 'Ngite Climate Auditorium for Coffee & Cocoa Stakeholders' },
  { image: '/assets/img/New_Images/gettyimages-518782849-612x612.jpg', tag: 'Food security', title: 'Food Security for Coffee & Cocoa Communities' },
  { image: '/assets/img/coffee_bg.jpeg', tag: 'Gender & climate', title: 'Women for Climate Action' },
  { image: '/assets/img/climate-change/event_card_img_1.jpg', tag: 'Environment', title: 'Responsible Waste Disposal' },
]

const faqs = [
  {
    question: 'How does climate change affect coffee quality?',
    answer: 'Changing temperatures and rainfall patterns can alter bean size, flavor, and ripening time. Drought and heat also place stress on coffee plants and can increase pest pressure, affecting both quality and yields.',
  },
  {
    question: 'What is the EUDR and why does it matter?',
    answer: 'The EU Deforestation Regulation sets due-diligence requirements for products placed on or exported from the European Union market. Farm-level data and transparent supply chains help coffee and cocoa businesses prepare for these requirements.',
  },
  {
    question: 'How can smallholder farmers adapt to climate change?',
    answer: 'Agroforestry, soil and water conservation, climate-smart crop practices, and farmer training can help strengthen resilience. Better market connections and collective action can also support more stable livelihoods.',
  },
  {
    question: 'How does Ngite Space support climate action?',
    answer: 'We bring partners together around practical climate education, cleaner production, responsible sourcing, and research — with a focus on resilient coffee and cocoa communities in Uganda.',
  },
]

const news = [
  {
    image: '/assets/img/New_Images/eudr.webp',
    imageAlt: 'Coffee and cocoa supply chain landscape',
    category: 'Regulation',
    author: 'Ngite Space',
    topic: 'EUDR',
    title: 'The EU Deforestation Regulation: what it means for Uganda',
    link: '/eudr',
  },
  {
    image: '/assets/img/New_Images/step-3-990x_.webp',
    imageAlt: 'Sustainable agriculture and natural resources',
    category: 'Research',
    author: 'Ngite Space',
    topic: 'Sustainability',
    title: 'Climate change and resource sustainability in African agriculture',
    link: '/publication_01',
  },
  {
    image: '/assets/img/New_Images/image_2.jpg',
    imageAlt: 'Coffee beans gathered after harvest',
    category: 'Partnerships',
    author: 'Ngite Space',
    topic: 'Community',
    title: 'Building new partnerships for greener value chains',
    link: '/blog',
  },
]
</script>

<style src="../assets/css/home.css"></style>
