<template>
  <main class="legal-page">
    <section class="page-hero">
      <div class="page-hero-bg" id="heroBg"></div>
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <Breadcrumbs />
        <h1>Cookies <em>Policy</em></h1>
      </div>
    </section>

    <section class="legal-content">
      <div class="legal-container">
        <p class="last-updated">Last Updated: 9 April 2026</p>

        <h2>1. What Are Cookies</h2>
        <p>Cookies are small text files that are placed on your device when you visit our website. They are widely used to make websites work more efficiently and to provide information to website owners.</p>

        <h2>2. How We Use Cookies</h2>
        <p>We use cookies for the following purposes:</p>
        <ul>
          <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable basic functionality such as page navigation and access to secure areas.</li>
          <li><strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting information about pages visited, time spent, and error messages.</li>
          <li><strong>Functional Cookies:</strong> These cookies remember your preferences and choices to provide enhanced features.</li>
        </ul>

        <h2>3. Types of Cookies We Use</h2>
        <h3>3.1 Session Cookies</h3>
        <p>These are temporary cookies that are deleted when you close your browser. They help maintain your session while you navigate the website.</p>

        <h3>3.2 Persistent Cookies</h3>
        <p>These cookies remain on your device for a set period or until you delete them. They help remember your preferences for future visits.</p>

        <h3>3.3 Third-Party Cookies</h3>
        <p>We may use third-party services that place cookies on your device, such as analytics tools or chat widgets. These third parties have their own privacy policies.</p>

        <h2>4. Managing Cookies</h2>
        <p>You can control and manage cookies in various ways:</p>
        <ul>
          <li><strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings. You can block all cookies, accept only certain cookies, or delete existing cookies.</li>
          <li><strong>Cookie Preferences:</strong> You may be able to set your cookie preferences through our website's cookie consent banner (if available).</li>
        </ul>
        <p>Please note that blocking or deleting cookies may affect your user experience and some features of our website may not function properly.</p>

        <h2>5. Third-Party Services</h2>
        <p>We use the following third-party services that may use cookies:</p>
        <ul>
          <li><strong>WhatsApp:</strong> Our "Chat with us" link opens WhatsApp, which is governed by WhatsApp's own privacy policy.</li>
          <li><strong>Analytics Tools:</strong> We may use analytics tools to understand website usage patterns.</li>
        </ul>
        <p>Please refer to the respective privacy policies of these third-party services for more information about their cookie practices.</p>

        <h2>6. Your Choices</h2>
        <p>You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas may be restricted.</p>

        <h2>7. Updates to This Policy</h2>
        <p>We may update this Cookies Policy from time to time to reflect changes in our use of cookies or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new policy on this page with an updated revision date.</p>

        <h2>8. Contact Us</h2>
        <p>If you have any questions about our use of cookies, please contact us:</p>
        <div class="contact-info">
          <p><strong>Email:</strong> info@ngitespace.com</p>
          <p><strong>Phone:</strong> +256 763 965 806</p>
          <p><strong>Address:</strong> P.O Box 188312, Kampala, Uganda</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import Breadcrumbs from '../components/Breadcrumbs.vue'
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
}

.legal-content {
  padding: 60px 20px;
  max-width: 900px;
  margin: 0 auto;
}

.legal-container {
  line-height: 1.8;
}

.last-updated {
  color: #666;
  font-style: italic;
  margin-bottom: 30px;
}

h2 {
  color: var(--forest);
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 1.8rem;
}

h3 {
  color: var(--forest);
  margin-top: 30px;
  margin-bottom: 15px;
  font-size: 1.4rem;
}

p {
  margin-bottom: 15px;
  color: #333;
}

ul {
  margin-bottom: 20px;
  padding-left: 25px;
}

li {
  margin-bottom: 10px;
  color: #333;
}

strong {
  color: var(--forest);
}

.contact-info {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
}

.contact-info p {
  margin-bottom: 10px;
}

.contact-info strong {
  color: var(--forest);
}
</style>
