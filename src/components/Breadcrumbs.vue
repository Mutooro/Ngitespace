<template>
  <nav class="breadcrumb-nav" aria-label="Breadcrumb">
    <ol class="breadcrumb">
      <li v-for="(crumb, index) in crumbs" :key="crumb.path">
        <template v-if="index < crumbs.length - 1">
          <router-link :to="crumb.path">{{ crumb.name }}</router-link>
        </template>
        <span v-else class="sep" aria-current="page">{{ crumb.name }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { breadcrumbsFor } from '../seo'

const route = useRoute()
const crumbs = computed(() => breadcrumbsFor(route.name))
</script>
