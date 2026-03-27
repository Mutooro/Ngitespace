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
          <form @submit.prevent="submitForm" class="custom-form" autocomplete="on">
            <div class="form-row">
              <div class="form-group">
                <label for="firstName">First Name *</label>
                <input type="text" id="firstName" v-model="form.firstName" required placeholder="John" />
              </div>
              <div class="form-group">
                <label for="lastName">Last Name *</label>
                <input type="text" id="lastName" v-model="form.lastName" required placeholder="Doe" />
              </div>
            </div>
            
            <div class="form-group">
              <label for="email">Email Address *</label>
              <input type="email" id="email" v-model="form.email" required placeholder="john@example.com" />
            </div>
            
            <div class="form-group">
              <label for="subject">Subject *</label>
              <input type="text" id="subject" v-model="form.subject" required placeholder="How can we help?" />
            </div>
            
            <div class="form-group">
              <label for="message">Message *</label>
              <textarea id="message" v-model="form.message" required placeholder="Your message here..." rows="5"></textarea>
            </div>

            <!-- Honeypot: hidden from real users, bots will fill this -->
            <div class="hp-field" aria-hidden="true">
              <label for="_gotcha">Leave this empty</label>
              <input type="text" id="_gotcha" v-model="form._gotcha" tabindex="-1" autocomplete="off" />
            </div>
            
            <button type="submit" class="btn-primary submit-btn" :disabled="isSubmitting">
              <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
              <i v-if="!isSubmitting" class="fas fa-paper-plane"></i>
              <i v-else class="fas fa-spinner fa-spin"></i>
            </button>
            
            <div v-if="formStatus" :class="['form-status', formStatus.type]">
              {{ formStatus.message }}
            </div>
          </form>
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
import { reactive, ref } from 'vue'

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

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
  _gotcha: '' // honeypot — must stay empty
})

const isSubmitting = ref(false)
const formStatus = ref(null)

const submitForm = async () => {
  // Honeypot check: bots fill this, humans don't
  if (form._gotcha) {
    // Silently fake success to not tip off bots
    formStatus.value = { type: 'success', message: 'Thank you! Your message has been sent.' }
    return
  }

  isSubmitting.value = true
  formStatus.value = null

  try {
    // Replace "YOUR_FORMSPREE_ENDPOINT" with the actual endpoint URL once available.
    // Example: 'https://formspree.io/f/xXXXXXXX'
    const response = await fetch('https://formspree.io/f/mgonpzke', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: `${form.firstName} ${form.lastName}`,
        email: form.email,
        _replyto: form.email,
        subject: form.subject,
        _subject: form.subject,
        message: form.message,
        _gotcha: form._gotcha // Formspree also checks this server-side
      })
    })

    if (response.ok) {
      formStatus.value = { type: 'success', message: 'Thank you! Your message has been sent.' }
      // Reset form
      form.firstName = ''
      form.lastName = ''
      form.email = ''
      form.subject = ''
      form.message = ''
      form._gotcha = ''
    } else {
      const data = await response.json()
      if (Object.hasOwn(data, 'errors')) {
        formStatus.value = { type: 'error', message: data.errors.map(error => error.message).join(', ') }
      } else {
        formStatus.value = { type: 'error', message: 'Oops! There was a problem submitting your form.' }
      }
    }
  } catch (error) {
    formStatus.value = { type: 'error', message: 'Oops! There was a problem submitting your form.' }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* Custom Styled Form for ContactView */

/* Honeypot — visually hidden but not display:none (bots skip display:none) */
.hp-field {
  position: absolute;
  left: -9999px;
  top: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
}
.custom-form {
  background: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.form-group {
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--forest);
  margin-bottom: 8px;
  letter-spacing: 0.02em;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 14px 16px;
  border: 1.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background: var(--offwhite);
  color: var(--charcoal);
  font-family: var(--body-font);
  font-size: 0.95rem;
  transition: all 0.25s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--sage);
  background: #ffffff;
  box-shadow: 0 0 0 4px rgba(82, 183, 136, 0.1);
}

.form-group textarea {
  resize: vertical;
}

.submit-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  cursor: pointer;
  padding: 16px;
  font-size: 1rem;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.form-status {
  margin-top: 24px;
  padding: 16px;
  border-radius: 4px;
  font-size: 0.95rem;
  font-weight: 500;
  text-align: center;
}

.form-status.success {
  background: rgba(82, 183, 136, 0.1);
  color: var(--leaf);
  border: 1px solid rgba(82, 183, 136, 0.3);
}

.form-status.error {
  background: rgba(220, 53, 69, 0.1);
  color: #dc3545;
  border: 1px solid rgba(220, 53, 69, 0.3);
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .custom-form {
    padding: 24px;
  }
}

/* Original styles are defined globally in main.css */
</style>
