<template>
  <section id="questions" class="home-section home-faq-section" aria-labelledby="home-faq-title">
    <div class="home-container home-faq-layout">
      <div class="home-faq-visual">
        <img
          src="/assets/img/New_Images/The-Cocoa-Impact-story-1024x683.webp"
          alt="Fresh cocoa pods growing among green leaves"
          loading="lazy"
        />
        <div class="home-mission-card">
          <p class="home-kicker home-kicker-light">Our mission</p>
          <p>Building climate resilience across the food system, with a focus on coffee and cocoa.</p>
        </div>
      </div>

      <div class="home-faq-content">
        <p class="home-kicker">A few good questions</p>
        <h2 id="home-faq-title" class="home-section-title">Curious about<br /><em>what comes next?</em></h2>
        <div class="home-faq-list">
          <article v-for="(item, index) in items" :key="item.question" class="home-faq-item" :class="{ 'is-open': openIndex === index }">
            <h3>
              <button
                :id="`home-faq-question-${index}`"
                type="button"
                class="home-faq-trigger"
                :aria-expanded="openIndex === index"
                :aria-controls="`home-faq-answer-${index}`"
                @click="openIndex = openIndex === index ? -1 : index"
              >
                <span>{{ item.question }}</span>
                <i class="fas fa-chevron-down" aria-hidden="true"></i>
              </button>
            </h3>
            <div
              :id="`home-faq-answer-${index}`"
              class="home-faq-answer"
              role="region"
              :aria-labelledby="`home-faq-question-${index}`"
              :aria-hidden="openIndex !== index"
              v-show="openIndex === index"
            >
              <p>{{ item.answer }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const openIndex = ref(0)
</script>
