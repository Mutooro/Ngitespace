
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'

export const routes = [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/services',
            name: 'services',
            component: () => import('../views/ServicesView.vue')
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('../views/ProjectsView.vue')
        },
        {
            path: '/beyco',
            name: 'beyco',
            component: () => import('../views/BeycoView.vue')
        },
        {
            path: '/blog',
            name: 'blog',
            component: () => import('../views/BlogView.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../views/ContactView.vue')
        },
        {
            path: '/eudr',
            name: 'eudr',
            component: () => import('../views/EUDRView.vue')
        },
        {
            path: '/csr',
            name: 'csr',
            component: () => import('../views/CSRView.vue')
        },
        {
            path: '/publication_01',
            name: 'publication',
            component: () => import('../views/PublicationView.vue')
        },
        {
            path: '/donate',
            name: 'donate',
            component: () => import('../views/DonateView.vue')
        },
        {
            path: '/gallery',
            name: 'gallery',
            component: () => import('../views/GalleryView.vue')
        },
        {
            path: '/event-details',
            name: 'eventDetails',
            component: () => import('../views/EventDetailsView.vue')
        },
        {
            path: '/privacy-policy',
            name: 'privacyPolicy',
            component: () => import('../views/PrivacyPolicyView.vue')
        },
        {
            path: '/terms-and-conditions',
            name: 'termsAndConditions',
            component: () => import('../views/TermsAndConditionsView.vue')
        },
        {
            path: '/cookies-policy',
            name: 'cookiesPolicy',
            component: () => import('../views/CookiesPolicyView.vue')
        },
        {
            path: '/cookie-settings',
            name: 'cookieSettings',
            component: () => import('../views/CookieSettingsView.vue')
        },
        // 404 Catch-All
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundView
        }
    ]

export const routerOptions = {
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash }
    return { top: 0 }
  }
}
