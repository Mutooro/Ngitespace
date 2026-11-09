<template>
  <a class="whatsapp-float" href="https://wa.me/256779642488" target="_blank" rel="noopener"
    aria-label="Chat with Ngite Space on WhatsApp">
    <i class="fab fa-whatsapp" aria-hidden="true"></i>
    <span class="whatsapp-label">Chat with us</span>
  </a>
</template>

<style scoped>
.whatsapp-float {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 900;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #25d366;
  color: #fff;
  padding: 14px 20px;
  border-radius: 50px;
  font-family: var(--body-font);
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4);
  transition: transform 0.25s, box-shadow 0.25s;
}

.whatsapp-float i {
  font-size: 1.5rem;
}

.whatsapp-float:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(37, 211, 102, 0.5);
  color: #fff;
}

@media (max-width: 768px) {
  .whatsapp-float {
    bottom: 16px;
    right: 16px;
    padding: 12px 16px;
  }

  .whatsapp-label {
    display: none;
  }
}
</style>
