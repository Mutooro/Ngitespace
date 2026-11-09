import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes, routerOptions } from './router'
import './assets/css/main.css'

export const createApp = ViteSSG(App, { routes, ...routerOptions })

// vite-ssg skips parametric paths, so the catch-all route would never be
// rendered. "/404" gives the server a real file for ErrorDocument to point at.
export function includedRoutes(paths) {
  const renderable = paths.filter((path) => !path.includes(':') && !path.includes('*'))
  return [...renderable, '/404']
}
