import { useEffect, useRef, useState } from 'react'

const HIDE_THRESHOLD = 80

export const useScrollDirection = () => {
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)
  const rafRef = useRef(null)

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const update = () => {
      rafRef.current = null
      const currentY = window.scrollY
      const goingDown = currentY > lastScrollY.current

      if (currentY < HIDE_THRESHOLD) {
        setHidden(false)
      } else {
        setHidden(goingDown)
      }

      lastScrollY.current = currentY
    }

    const onScroll = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return hidden
}
