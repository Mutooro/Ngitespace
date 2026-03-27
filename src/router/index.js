import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
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
        // 404 Catch-All
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundView
        }
    ],
    scrollBehavior() {
        return { top: 0 }
    }
})

router.afterEach((to) => {
    const baseTitle = 'Ngite Space Limited — Greener Value Chains'
    const pageTitle = to.name ? to.name.charAt(0).toUpperCase() + to.name.slice(1).replace(/([A-Z])/g, ' $1') : ''
    document.title = pageTitle ? `${pageTitle} | ${baseTitle}` : baseTitle
})

export default router
