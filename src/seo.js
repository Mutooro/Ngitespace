export const SITE_URL = 'https://ngitespace.com'
export const SITE_NAME = 'Ngite Space Limited'
export const TITLE_SUFFIX = 'Ngite Space Limited'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/img/image_2.jpg`
export const OG_IMAGE_WIDTH = 1024
export const OG_IMAGE_HEIGHT = 683

// Breadcrumb parent, keyed by route name.
const PARENT = {
  eudr: { label: 'Services', path: '/services' },
  publication: { label: 'Blog', path: '/blog' },
  csr: { label: 'Projects', path: '/projects' },
  donate: { label: 'Projects', path: '/projects' },
  gallery: { label: 'About', path: '/about' },
}

export const pages = {
  home: {
    path: '/',
    title: `${SITE_NAME} — Greener Coffee & Cocoa Value Chains in Uganda`,
    description:
      'Ngite Space helps coffee and cocoa buyers, exporters and farming communities in Uganda — sustainable sourcing, EUDR compliance support, farmer training and climate action.',
    // Only slide 1: it is the one visible on first paint, the rest rotate in later.
    preload: ['/assets/img/img_5783.webp'],
  },
  about: {
    path: '/about',
    title: `About Us — Agro-Processing & Climate Change | ${TITLE_SUFFIX}`,
    description:
      'Ngite Space Limited is a Uganda-registered agro-processing and climate change company (Reg. No. 80034879454906) working to grow a sustainable future for coffee and cocoa.',
  },
  services: {
    path: '/services',
    title: `Sourcing, EUDR Compliance & Training Services | ${TITLE_SUFFIX}`,
    description:
      'Eleven services for coffee and cocoa value chains: buyer representation, quality assurance, phyto-sanitary compliance, EUDR due diligence, GIS and farm data, climate advocacy and farmer training.',
  },
  projects: {
    path: '/projects',
    title: `Our Projects — Climate & Food Security | ${TITLE_SUFFIX}`,
    description:
      'Ngite Space climate and food-security projects in Uganda: the Ngite Climate Auditorium, food security for coffee and cocoa communities, Women for Climate Action and responsible waste disposal.',
  },
  beyco: {
    path: '/beyco',
    title: `BEYCO — Digital Traceability for Coffee & Cocoa | ${TITLE_SUFFIX}`,
    description:
      'BEYCO is a web and mobile digital traceability platform developed by the Progreso Foundation and implemented with Ngite Space Limited in Uganda, giving producer organisations full ownership of their data.',
  },
  blog: {
    path: '/blog',
    title: `Insights & Publications | ${TITLE_SUFFIX}`,
    description:
      'Articles and publications on climate change, EUDR compliance and coffee and cocoa trade dynamics from Ngite Space Limited in Uganda.',
  },
  contact: {
    path: '/contact',
    title: `Contact Us in Kampala, Uganda | ${TITLE_SUFFIX}`,
    description:
      'Talk to Ngite Space Limited about sustainable sourcing, EUDR compliance, GIS farm mapping or training programmes. P.O. Box 188312, Kampala, Uganda.',
  },
  eudr: {
    path: '/eudr',
    title: `EUDR Compliance for Ugandan Coffee & Cocoa | ${TITLE_SUFFIX}`,
    description:
      'What the EU Deforestation Regulation means for Ugandan coffee and cocoa exporters: geolocation requirements, risk assessment, due diligence files and how Ngite Space supports compliance.',
  },
  csr: {
    path: '/csr',
    title: `Corporate Social Responsibility | ${TITLE_SUFFIX}`,
    description:
      'Ngite Space social initiatives: support for climate disaster victims, school climate clubs, agroforestry and tree planting, and responsible waste disposal.',
  },
  publication: {
    path: '/publication_01',
    title: `Climate Change & Resource Sustainability in African Agriculture | ${TITLE_SUFFIX}`,
    description:
      'Publication on climate change and resource sustainability in African agriculture, with a focus on coffee and cocoa growing systems.',
  },
  donate: {
    path: '/donate',
    title: `Support Our Mission | ${TITLE_SUFFIX}`,
    description:
      'Pledge support for Ngite Space Limited so smallholder coffee and cocoa farmers in Uganda can build climate resilience and access better markets.',
  },
  // Leftover template page (a 2024 London symposium) that is not Ngite Space
  // content and is linked from nowhere. Kept out of search results.
  eventDetails: {
    path: '/event-details',
    title: `Event Details | ${TITLE_SUFFIX}`,
    description: 'Event listing.',
    noindex: true,
  },
  gallery: {
    path: '/gallery',
    title: `Gallery | ${TITLE_SUFFIX}`,
    description:
      'Photographs from Ngite Space Limited field work, training and climate action with coffee and cocoa communities in Uganda.',
  },
  privacyPolicy: {
    path: '/privacy-policy',
    title: `Privacy Policy | ${TITLE_SUFFIX}`,
    description:
      'How Ngite Space Limited collects, uses and protects personal data on ngitespace.com.',
  },
  termsAndConditions: {
    path: '/terms-and-conditions',
    title: `Terms and Conditions | ${TITLE_SUFFIX}`,
    description:
      'Terms governing the use of the Ngite Space Limited website and services.',
  },
  cookiesPolicy: {
    path: '/cookies-policy',
    title: `Cookie Policy | ${TITLE_SUFFIX}`,
    description:
      'Which cookies and similar technologies Ngite Space Limited uses on ngitespace.com, and how to control them.',
  },
  cookieSettings: {
    path: '/cookie-settings',
    title: `Cookie Preferences | ${TITLE_SUFFIX}`,
    description:
      'Manage your cookie preferences for ngitespace.com.',
  },
  'not-found': {
    path: '/404',
    title: `Page Not Found | ${TITLE_SUFFIX}`,
    description: 'The page you requested could not be found.',
    noindex: true,
  },
}

export function pageFor(routeName) {
  return pages[routeName] || pages['not-found']
}

export function breadcrumbsFor(routeName) {
  const page = pageFor(routeName)
  const crumbs = [{ name: 'Home', path: '/' }]
  const parent = PARENT[routeName]
  if (parent) crumbs.push({ name: parent.label, path: parent.path })
  if (routeName !== 'home') {
    crumbs.push({ name: breadcrumbLabel(routeName, page), path: page.path })
  }
  return crumbs
}

export function breadcrumbUrl(crumb) {
  return `${SITE_URL}${crumb.path}`
}

// Visible breadcrumb label, kept separate from the long SEO title.
const CRUMB_LABEL = {
  home: 'Home',
  about: 'About',
  services: 'Services',
  projects: 'Projects',
  beyco: 'BEYCO',
  blog: 'Blog',
  contact: 'Contact',
  eudr: 'EUDR Compliance',
  csr: 'Our CSR',
  publication: 'Publication',
  donate: 'Donate',
  gallery: 'Gallery',
  privacyPolicy: 'Privacy Policy',
  termsAndConditions: 'Terms and Conditions',
  cookiesPolicy: 'Cookie Policy',
  cookieSettings: 'Cookie Preferences',
  'not-found': 'Page Not Found',
}

export function breadcrumbLabel(routeName, page) {
  return CRUMB_LABEL[routeName] || page.title
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/assets/img/ngite_space_logo.png`,
  image: DEFAULT_OG_IMAGE,
  description: pages.home.description,
  foundingLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressCountry: 'UG' } },
  address: {
    '@type': 'PostalAddress',
    postalCode: '188312',
    addressLocality: 'Kampala',
    addressCountry: 'UG',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@ngitespace.com',
      telephone: '+256 763 965 806',
      areaServed: 'UG',
      availableLanguage: ['en'],
    },
  ],
  sameAs: ['https://instagram.com/ngite_space', 'https://x.com/ngitespace'],
  knowsAbout: [
    'EUDR compliance',
    'Coffee traceability',
    'Cocoa sourcing',
    'GIS farm mapping',
    'Climate-smart agriculture',
  ],
}

export function breadcrumbJsonLd(routeName) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbsFor(routeName).map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: breadcrumbUrl(crumb),
    })),
  }
}
