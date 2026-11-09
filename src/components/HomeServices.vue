<template>
  <section id="services" class="home-section home-services" aria-labelledby="home-services-title">
    <div class="home-container">
      <div class="home-section-heading home-section-heading-spread">
        <div>
          <p class="home-kicker">What we do</p>
          <h2 id="home-services-title" class="home-section-title">A stronger chain,<br /><em>from the ground up.</em></h2>
        </div>
        <p class="home-section-intro">
          Practical expertise for every stage of a responsible coffee and cocoa journey — from farm-level data to export-ready trade.
        </p>
      </div>

      <div class="home-service-filters" role="group" aria-label="Filter services by category">
        <button
          v-for="filter in filters"
          :key="filter.id"
          type="button"
          class="home-filter-button"
          :class="{ 'is-active': currentFilter === filter.id }"
          :aria-pressed="currentFilter === filter.id"
          @click="currentFilter = filter.id"
        >
          {{ filter.label }}
        </button>
      </div>
      <p class="home-sr-only" aria-live="polite">Showing {{ filteredServices.length }} services</p>

      <div class="home-service-grid">
        <article v-for="service in filteredServices" :key="service.title" class="home-service-card">
          <div class="home-service-icon" aria-hidden="true"><i :class="service.icon"></i></div>
          <p class="home-service-category">{{ categoryLabel(service.category) }}</p>
          <h3>{{ service.title }}</h3>
          <p class="home-service-description">{{ service.shortDesc }}</p>
          <router-link :to="service.link" class="home-text-link">
            Explore service <i class="fas fa-arrow-right" aria-hidden="true"></i>
          </router-link>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  services: {
    type: Array,
    required: true,
  },
})

const filters = [
  { id: 'all', label: 'All services' },
  { id: 'sourcing', label: 'Sourcing & trade' },
  { id: 'compliance', label: 'Compliance' },
  { id: 'training', label: 'Training' },
  { id: 'climate', label: 'Climate action' },
]

const currentFilter = ref('all')
const filteredServices = computed(() => currentFilter.value === 'all'
  ? props.services
  : props.services.filter((service) => service.category === currentFilter.value))

const categoryLabel = (category) => ({
  sourcing: 'Sourcing & trade',
  compliance: 'Compliance',
  training: 'Training',
  climate: 'Climate action',
}[category] || 'Our expertise')
</script>
