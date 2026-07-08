import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0)
  const rafRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const update = () => {
      rafRef.current = null
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const next = scrollable > 0 ? clamp(window.scrollY / scrollable, 0, 1) : 0
      setProgress(next)
    }

    const onScroll = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [location.pathname])

  return progress
}
