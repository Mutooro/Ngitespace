<template>
  <main class="legal-page">
    <section class="page-hero">
      <div class="page-hero-bg" id="heroBg"></div>
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <Breadcrumbs />
        <h1>Terms & <em>Conditions</em></h1>
      </div>
    </section>

    <section class="legal-content">
      <div class="legal-container">
        <p class="last-updated">Last Updated: 9 April 2026</p>

        <h2>1. Introduction</h2>
        <p>Welcome to Ngite Space Limited. By accessing or using our website ngitespace.com and our services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, please do not use our website or services.</p>

        <h2>2. Company Information</h2>
        <p>Ngite Space Limited is a company registered under the laws of Uganda (Reg. No. 80034879454906). Our registered address is P.O Box 188312, Kampala, Uganda.</p>

        <h2>3. Use of Website</h2>
        <h3>3.1 Permitted Use</h3>
        <p>You may use this website for lawful purposes and in accordance with these Terms. You agree not to:</p>
        <ul>
          <li>Use the website for any illegal purpose</li>
          <li>Attempt to gain unauthorized access to our servers or systems</li>
          <li>Interfere with or disrupt the website or servers</li>
          <li>Use the website to transmit viruses or malicious code</li>
          <li>Reproduce, duplicate, copy, or exploit any portion of the website without permission</li>
        </ul>

        <h3>3.2 Intellectual Property</h3>
        <p>All content on this website, including text, graphics, logos, images, and software, is the property of Ngite Space Limited or its content suppliers and is protected by copyright and other intellectual property laws.</p>

        <h2>4. Services</h2>
        <h3>4.1 Service Description</h3>
        <p>We provide various services related to sustainable agriculture, coffee and cocoa trading, EUDR compliance, climate advocacy, and related consulting services. Specific service terms may be provided in separate agreements.</p>

        <h3>4.2 Service Availability</h3>
        <p>We strive to maintain the availability of our website and services but do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue any service at any time without notice.</p>

        <h2>5. User Accounts</h2>
        <p>If you create an account on our website, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>

        <h2>6. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, Ngite Space Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability shall not exceed the amount you paid, if any, for our services.</p>

        <h2>7. Indemnification</h2>
        <p>You agree to indemnify and hold harmless Ngite Space Limited, its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of our website or services or your violation of these Terms.</p>

        <h2>8. Privacy</h2>
        <p>Your use of our website is also governed by our Privacy Policy, which describes how we collect, use, and protect your personal information.</p>

        <h2>9. Third-Party Links</h2>
        <p>Our website may contain links to third-party websites. We are not responsible for the content, policies, or practices of these third-party sites. We encourage you to review the privacy policies and terms of any third-party sites you visit.</p>

        <h2>10. Governing Law</h2>
        <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of Uganda. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Uganda.</p>

        <h2>11. Changes to Terms</h2>
        <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on this website. Your continued use of the website after changes constitutes acceptance of the new terms.</p>

        <h2>12. Contact Information</h2>
        <p>If you have any questions about these Terms and Conditions, please contact us:</p>
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
