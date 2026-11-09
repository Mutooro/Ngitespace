import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import {
  SITE_URL,
  DEFAULT_OG_IMAGE,
  OG_IMAGE_WIDTH,
  OG_IMAGE_HEIGHT,
  pageFor,
  organizationJsonLd,
  breadcrumbJsonLd,
} from '../seo'

export function usePageSeo() {
  const route = useRoute()

  const page = computed(() => pageFor(route.name))
  const canonical = computed(() => `${SITE_URL}${page.value.path}`)
  const image = computed(() => page.value.image || DEFAULT_OG_IMAGE)
  const description = computed(() => page.value.description)

  useHead({
    title: computed(() => page.value.title),
    script: computed(() => [
      { type: 'application/ld+json', innerHTML: JSON.stringify(organizationJsonLd) },
      { type: 'application/ld+json', innerHTML: JSON.stringify(breadcrumbJsonLd(route.name)) },
    ]),
    meta: computed(() => [
      { name: 'description', content: description.value },
      { name: 'robots', content: page.value.noindex ? 'noindex, nofollow' : 'index, follow' },
      { property: 'og:type', content: page.value.ogType || 'website' },
      { property: 'og:site_name', content: 'Ngite Space Limited' },
      { property: 'og:title', content: page.value.title },
      { property: 'og:description', content: description.value },
      { property: 'og:url', content: canonical.value },
      { property: 'og:image', content: image.value },
      { property: 'og:image:width', content: String(OG_IMAGE_WIDTH) },
      { property: 'og:image:height', content: String(OG_IMAGE_HEIGHT) },
      { property: 'og:image:alt', content: page.value.imageAlt || 'Ngite Space Limited' },
      { property: 'og:locale', content: 'en_UG' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: page.value.title },
      { name: 'twitter:description', content: description.value },
      { name: 'twitter:image', content: image.value },
    ]),
    link: computed(() => [
      { rel: 'canonical', href: canonical.value },
      ...(page.value.preload || []).map((href) => ({ rel: 'preload', href, as: 'image' })),
    ]),
  })

  return { page, canonical }
}
