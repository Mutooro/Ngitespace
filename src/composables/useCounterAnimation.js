import { ref, onMounted, onUnmounted } from 'vue'

export function useCounterAnimation(finalValue, duration = 2000) {
  const displayValue = ref(0)
  let animationFrame = null
  let startTime = null

  const animate = (timestamp) => {
    if (!startTime) startTime = timestamp
    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)

    // Parse the final value to extract the numeric part
    const numericValue = parseInt(finalValue.toString().replace(/\D/g, ''))
    displayValue.value = Math.floor(numericValue * progress)

    if (progress < 1) {
      animationFrame = requestAnimationFrame(animate)
    } else {
      displayValue.value = numericValue
    }
  }

  const startAnimation = () => {
    startTime = null
    animationFrame = requestAnimationFrame(animate)
  }

  const cleanup = () => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame)
    }
  }

  onUnmounted(cleanup)

  return {
    displayValue,
    startAnimation,
    cleanup
  }
}

export function useIntersectionObserver(callback) {
  let observer = null

  const initObserver = (element) => {
    const options = {
      threshold: 0.5,
      rootMargin: '0px'
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback()
          observer.unobserve(entry.target)
        }
      })
    }, options)

    if (element) {
      observer.observe(element)
    }
  }

  const cleanup = () => {
    if (observer) {
      observer.disconnect()
    }
  }

  onUnmounted(cleanup)

  return {
    initObserver,
    cleanup
  }
}
