import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
        }
    ],
    scrollBehavior() {
        return { top: 0 }
    }
})

export default router
