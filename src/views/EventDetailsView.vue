<template>
  <main class="event-details-page">
    <!-- PAGE HERO -->
    <section class="page-hero">
      <div class="page-hero-bg" id="heroBg"></div>
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <Breadcrumbs />
        <h1>Event <em>Details</em></h1>
      </div>
    </section>

    <!-- EVENT CONTENT SECTION -->
    <section class="event-content-section">
      <div class="event-main">
        <article class="event-article">
          <img :src="event.image" :alt="event.title" class="event-feature-img" loading="lazy">
          <h2>{{ event.title }}</h2>
          <p class="lead-text">{{ event.intro }}</p>

          <p v-for="(para, index) in event.paragraphs" :key="index">{{ para }}</p>

          <h3><i class="fas fa-list"></i> Agenda:</h3>
          <p>{{ event.agendaIntro }}</p>

          <div v-for="(item, index) in event.agendaItems" :key="index" class="agenda-item">
            <h4>{{ index + 1 }}. {{ item.title }}</h4>
            <p>{{ item.description }}</p>
          </div>

          <h3><i class="fas fa-pen-to-square"></i> Registration Information:</h3>
          <p v-html="event.registrationInfo"></p>

          <h3>{{ event.closing }}</h3>
        </article>
      </div>

      <div class="event-sidebar">
        <!-- Event Info Card -->
        <div class="sidebar-card event-info-card">
          <h3>Event Details:</h3>
          <ul class="event-details-list">
            <li v-for="detail in event.details" :key="detail.label">
              <span class="detail-label">{{ detail.label }}</span>
              <span class="detail-value">{{ detail.value }}</span>
            </li>
          </ul>
        </div>

        <!-- Contact Form -->
        <div class="sidebar-card">
          <h3>Contact Us:</h3>
          <form @submit.prevent="submitContactForm" class="event-contact-form">
            <label class="sr-only" for="event-name">Your name</label>
            <input
              id="event-name"
              v-model="form.name"
              type="text"
              placeholder="Your Name"
              class="form-input"
              required
            >
            <label class="sr-only" for="event-email">Your email</label>
            <input
              id="event-email"
              v-model="form.email"
              type="email"
              placeholder="Your Email"
              class="form-input"
              required
            >
            <label class="sr-only" for="event-phone">Mobile number</label>
            <input
              id="event-phone"
              v-model="form.phone"
              type="tel"
              placeholder="Mobile Number"
              class="form-input"
              required
            >
            <label class="sr-only" for="event-message">Your message</label>
            <textarea
              id="event-message"
              v-model="form.message"
              placeholder="Type Your Comment"
              rows="4"
              class="form-textarea"
            ></textarea>
            <button type="submit" class="btn-submit" :disabled="isSubmitting">
              {{ isSubmitting ? 'Sending…' : 'Contact Now' }}
              <i class="fas fa-arrow-right" aria-hidden="true"></i>
            </button>
            <p v-if="formStatus" :class="['form-status', formStatus.type]" role="status" aria-live="polite">{{ formStatus.message }}</p>
          </form>
        </div>

        <!-- Social Share Card -->
        <div class="sidebar-card">
          <h3>Share This Event</h3>
          <div class="social-share">
            <a
              v-for="link in shareLinks"
              :key="link.label"
              :href="link.href"
              class="share-btn"
              :aria-label="link.label"
              :title="link.label"
              target="_blank"
              rel="noopener"
            >
              <i :class="link.icon" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import Breadcrumbs from '../components/Breadcrumbs.vue'
import { ref } from 'vue'
import { SITE_URL } from '../seo'

const pageUrl = `${SITE_URL}/event-details`
const shareLinks = [
  { label: 'Share on Facebook', icon: 'fab fa-facebook-f', href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}` },
  { label: 'Share on X', icon: 'fab fa-twitter', href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}` },
  { label: 'Share on LinkedIn', icon: 'fab fa-linkedin-in', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}` },
  { label: 'Share on WhatsApp', icon: 'fab fa-whatsapp', href: `https://wa.me/?text=${encodeURIComponent(pageUrl)}` }
]

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const event = {
  title: 'A Beacon of Knowledge Symposium',
  image: '/assets/img/agriculture/event_card_img_3.jpg',
  intro: 'Embark on a journey of enlightenment with our Learning Lighthouse symposium. This educational event brings together passionate speakers and experts to illuminate the path of knowledge. Join us for insightful discussions, workshops, and interactive sessions designed to empower minds and inspire a lifelong love for learning.',
  paragraphs: [
    'Together, let\'s build a brighter future through education!',
    'We prioritize content and experiences that educate, inspire, and empower. Our selection process involves assessing the entire focus of each event to ensure it aligns with our commitment to sharing knowledge and building community.'
  ],
  agendaIntro: 'The symposium features a carefully curated program designed to engage participants across all levels:',
  agendaItems: [
    {
      title: 'Keynote Address: "Navigating the Seas of Knowledge"',
      description: 'An inspiring talk by Kerua Zoshua on the importance of education as a guiding force in personal and societal development.'
    },
    {
      title: 'Interactive Workshops',
      description: 'Engage in hands-on workshops covering a range of subjects, from STEM activities to arts and literature, tailored for various age groups.'
    },
    {
      title: 'Panel Discussions: "Shaping Minds, Shaping Futures"',
      description: 'Thought-provoking discussions featuring educators, scholars, and industry leaders exploring the role of education in shaping the future of individuals and communities.'
    },
    {
      title: 'Innovative Teaching Methods Showcase',
      description: 'Learn about and experience cutting-edge teaching methods and technologies that enhance the learning experience.'
    },
    {
      title: 'Student Spotlight: Showcasing Talent and Creativity',
      description: 'A platform for students to showcase their talents, projects, and creative endeavors, fostering a sense of achievement and confidence.'
    },
    {
      title: 'Networking Lunch: Connecting Minds over Meals',
      description: 'A casual lunch session providing opportunities for attendees to connect, share ideas, and build networks within the educational community.'
    },
    {
      title: 'Resource Fair: Explore the Tools of Learning',
      description: 'An exhibition featuring educational resources, tools, and technologies aimed at enhancing teaching and learning experiences.'
    },
    {
      title: 'Closing Ceremony: "Igniting Sparks, Building Futures"',
      description: 'A closing ceremony acknowledging participants, highlighting key takeaways, and inspiring a collective commitment to the ongoing journey of education.'
    }
  ],
  registrationInfo: 'Registration is free. To secure your spot, please <a href="mailto:info@ngitespace.com">contact us</a> or fill out the form on the right.',
  closing: 'Join us at Learning Lighthouse Symposium for an inspiring day of education, collaboration, and the celebration of knowledge! Together, let\'s light up the path to a brighter future through the power of learning.',
  details: [
    { label: 'Speakers', value: 'Kerua Zoshua' },
    { label: 'Date', value: '11 Dec 2024' },
    { label: 'Time', value: '08:00 - 09:00' },
    { label: 'Location', value: 'Arm Stadium, London, UK' }
  ]
}

const isSubmitting = ref(false)
const formStatus = ref(null)

const submitContactForm = async () => {
  isSubmitting.value = true
  formStatus.value = null

  try {
    const response = await fetch('https://formspree.io/f/mgonpzke', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        _replyto: form.value.email,
        phone: form.value.phone,
        subject: 'Event enquiry',
        _subject: 'Event enquiry — A Beacon of Knowledge Symposium',
        message: form.value.message
      })
    })

    if (response.ok) {
      formStatus.value = { type: 'success', message: 'Thank you! Your enquiry has been sent.' }
      form.value = { name: '', email: '', phone: '', message: '' }
    } else {
      formStatus.value = { type: 'error', message: 'Oops! There was a problem sending your enquiry.' }
    }
  } catch (error) {
    formStatus.value = { type: 'error', message: 'Oops! There was a problem sending your enquiry.' }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.event-content-section {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 48px;
  padding: 80px 48px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.event-article {
  line-height: 1.8;
}

.event-feature-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 32px;
}

.event-article h2 {
  font-size: 36px;
  font-family: var(--heading-font);
  font-weight: 700;
  color: var(--charcoal);
  margin-bottom: 24px;
  margin-top: 0;
}

.lead-text {
  font-size: 18px;
  color: var(--forest);
  font-weight: 500;
  margin-bottom: 24px;
}

.event-article p {
  color: var(--charcoal);
  margin-bottom: 20px;
  text-align: justify;
}

.event-article h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--forest);
  margin-top: 32px;
  margin-bottom: 16px;
}

.event-article h3 i {
  margin-right: 8px;
  color: var(--sage);
}

.agenda-item {
  padding: 20px;
  background: rgba(45, 106, 79, 0.05);
  border-left: 4px solid var(--sage);
  margin-bottom: 16px;
  border-radius: 4px;
}

.agenda-item h4 {
  font-weight: 600;
  color: var(--forest);
  margin: 0 0 8px 0;
  font-size: 16px;
}

.agenda-item p {
  margin: 0;
  font-size: 14px;
  color: var(--muted);
}

/* Sidebar */
.event-sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.sidebar-card {
  background: var(--offwhite);
  padding: 32px;
  border-radius: 12px;
  border: 1px solid rgba(45, 106, 79, 0.1);
}

.sidebar-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--forest);
  margin: 0 0 20px 0;
}

.event-info-card {
  background: white;
  border: 2px solid var(--sage);
}

.event-details-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.event-details-list li {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(45, 106, 79, 0.1);
}

.event-details-list li:last-child {
  border-bottom: none;
}

.detail-label {
  font-weight: 600;
  color: var(--forest);
  font-size: 14px;
}

.detail-value {
  color: var(--muted);
  font-size: 14px;
}

/* Contact Form */
.event-contact-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid rgba(45, 106, 79, 0.2);
  border-radius: 6px;
  font-family: var(--body-font);
  font-size: 14px;
  transition: border-color 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  border-color: var(--sage);
  box-shadow: 0 0 0 3px rgba(82, 183, 136, 0.1);
}

.form-textarea {
  resize: vertical;
}

.btn-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, var(--forest), var(--sage));
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 8px;
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(45, 106, 79, 0.3);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.form-status {
  margin-top: 16px;
  padding: 14px;
  border-radius: 6px;
  font-size: 0.9rem;
  text-align: center;
}

.form-status.success {
  background: rgba(82, 183, 136, 0.12);
  color: var(--leaf);
  border: 1px solid rgba(82, 183, 136, 0.3);
}

.form-status.error {
  background: rgba(220, 53, 69, 0.1);
  color: #b02a37;
  border: 1px solid rgba(220, 53, 69, 0.3);
}

/* Social Share */
.social-share {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.share-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 2px solid rgba(45, 106, 79, 0.2);
  border-radius: 50%;
  color: var(--sage);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 18px;
}

.share-btn:hover {
  background: var(--sage);
  color: white;
  border-color: var(--sage);
  transform: translateY(-2px);
}

@media (max-width: 1024px) {
  .event-content-section {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 60px 32px;
  }

  .event-article h2 {
    font-size: 28px;
  }

  .event-feature-img {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .event-content-section {
    padding: 40px 24px;
  }

  .event-article h2 {
    font-size: 24px;
  }

  .event-feature-img {
    height: 250px;
  }

  .sidebar-card {
    padding: 24px;
  }

  .event-details-list li {
    grid-template-columns: 1fr;
    gap: 4px;
  }

  .social-share {
    justify-content: center;
  }
}
</style>
