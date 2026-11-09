<template>
  <main class="legal-page">
    <section class="page-hero">
      <div class="page-hero-bg" id="heroBg"></div>
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <Breadcrumbs />
        <h1>Privacy <em>Policy</em></h1>
      </div>
    </section>

    <section class="legal-content">
      <div class="legal-container">
        <p class="last-updated">Last Updated: 9 April 2026</p>

        <h2>1. Introduction</h2>
        <p>Ngite Space Limited ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website ngitespace.com and use our services.</p>

        <h2>2. Information We Collect</h2>
        <h3>2.1 Personal Information</h3>
        <p>We may collect personal information that you voluntarily provide to us when you:</p>
        <ul>
          <li>Fill out contact forms on our website</li>
          <li>Subscribe to our newsletter</li>
          <li>Request information about our services</li>
          <li>Communicate with us via email or phone</li>
        </ul>
        <p>This information may include your name, email address, phone number, company name, and any other information you choose to provide.</p>

        <h3>2.2 Automatically Collected Information</h3>
        <p>When you visit our website, we may automatically collect certain information, including:</p>
        <ul>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Referring website</li>
          <li>Pages visited and time spent on our site</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your inquiries and provide requested services</li>
          <li>Send you newsletters and marketing communications (with your consent)</li>
          <li>Improve our website and services</li>
          <li>Analyze website usage patterns</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>4. Information Sharing</h2>
        <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
        <ul>
          <li>With service providers who perform services on our behalf (e.g., web hosting, email services)</li>
          <li>When required by law or to protect our rights</li>
          <li>With your consent for specific purposes</li>
        </ul>

        <h2>5. Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>

        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Opt-out of marketing communications</li>
        </ul>
        <p>To exercise these rights, please contact us at info@ngitespace.com</p>

        <h2>7. Cookies</h2>
        <p>We use cookies to enhance your browsing experience. For more information, please refer to our Cookies Policy.</p>

        <h2>8. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated revision date.</p>

        <h2>9. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us:</p>
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
