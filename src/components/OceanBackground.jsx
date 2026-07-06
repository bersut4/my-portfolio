import { useEffect, useRef } from 'react'
import Box from '@mui/material/Box'

const BUBBLES = [
  { left: '6%',  size: 10, duration: 9,   delay: 0 },
  { left: '16%', size: 6,  duration: 7,   delay: 2 },
  { left: '26%', size: 14, duration: 11,  delay: 1 },
  { left: '37%', size: 8,  duration: 8,   delay: 4 },
  { left: '48%', size: 5,  duration: 6,   delay: 3 },
  { left: '58%', size: 12, duration: 10,  delay: 0.5 },
  { left: '68%', size: 7,  duration: 8.5, delay: 2.5 },
  { left: '78%', size: 9,  duration: 9.5, delay: 5 },
  { left: '87%', size: 6,  duration: 7.5, delay: 1.5 },
  { left: '94%', size: 11, duration: 10.5, delay: 3.5 },
]

const FISH = [
  { top: '36%', size: 34, duration: 26, delay: 0,  direction: 'ltr', color: 'var(--color-secondary)' },
  { top: '52%', size: 22, duration: 19, delay: 6,  direction: 'rtl', color: 'var(--color-text-secondary)' },
  { top: '68%', size: 28, duration: 32, delay: 3,  direction: 'ltr', color: 'var(--color-accent)' },
  { top: '80%', size: 18, duration: 22, delay: 10, direction: 'rtl', color: 'var(--color-secondary)' },
]

const SURFACE_END = 0.25
const DEPTH_END = 0.85
const SEABED_START = 0.85

const OCEAN_SHALLOW_TOP = '#123047'
const OCEAN_SHALLOW_BOTTOM = '#0B2233'
const OCEAN_DEEP_TOP = '#050D14'
const OCEAN_DEEP_BOTTOM = '#030A0F'

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)
const lerp = (a, b, t) => a + (b - a) * t

const hexToRgb = (hex) => {
  const n = parseInt(hex.replace('#', ''), 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

const lerpColor = (hexA, hexB, t) => {
  const [r1, g1, b1] = hexToRgb(hexA)
  const [r2, g2, b2] = hexToRgb(hexB)
  const r = Math.round(lerp(r1, r2, t))
  const g = Math.round(lerp(g1, g2, t))
  const b = Math.round(lerp(b1, b2, t))
  return `rgb(${r}, ${g}, ${b})`
}

const FishSilhouette = ({ size, color }) => (
  <svg width={size} height={size * 0.5} viewBox="0 0 40 20">
    <path
      d="M2 10 C 8 0, 24 0, 30 5 L 40 0 L 34 10 L 40 20 L 30 15 C 24 20, 8 20, 2 10 Z"
      fill={color}
      opacity="0.55"
    />
  </svg>
)

const OceanBackground = () => {
  const oceanRef = useRef(null)
  const waveBackRef = useRef(null)
  const waveFrontRef = useRef(null)
  const seabedRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const update = () => {
      rafRef.current = null
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? clamp(window.scrollY / maxScroll, 0, 1) : 0

      const surfaceT = clamp(progress / SURFACE_END, 0, 1)
      const surfaceY = lerp(22, -4, surfaceT)
      if (oceanRef.current) oceanRef.current.style.top = `${surfaceY}vh`
      if (waveBackRef.current) waveBackRef.current.style.top = `${surfaceY}vh`
      if (waveFrontRef.current) waveFrontRef.current.style.top = `${surfaceY}vh`

      const depthT = clamp(progress / DEPTH_END, 0, 1)
      if (oceanRef.current) {
        const top = lerpColor(OCEAN_SHALLOW_TOP, OCEAN_DEEP_TOP, depthT)
        const bottom = lerpColor(OCEAN_SHALLOW_BOTTOM, OCEAN_DEEP_BOTTOM, depthT)
        oceanRef.current.style.background = `linear-gradient(180deg, ${top} 0%, ${bottom} 100%)`
      }

      const seabedT = clamp((progress - SEABED_START) / (1 - SEABED_START), 0, 1)
      if (seabedRef.current) {
        seabedRef.current.style.opacity = String(seabedT)
        seabedRef.current.style.transform = `translateY(${lerp(20, 0, seabedT)}px)`
      }
    }

    const onScroll = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    const resizeObserver = new ResizeObserver(onScroll)
    resizeObserver.observe(document.body)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      resizeObserver.disconnect()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <Box
      aria-hidden="true"
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        background: 'linear-gradient(180deg, var(--color-sky-top) 0%, var(--color-sky-bottom) 100%)',
      }}
    >
      <Box ref={oceanRef} sx={{ position: 'absolute', left: 0, right: 0, bottom: 0, top: '22vh' }} />

      {BUBBLES.map((bubble, i) => (
        <Box
          key={i}
          data-ocean-decor
          sx={{
            position: 'absolute',
            left: bubble.left,
            bottom: '-5%',
            width: bubble.size,
            height: bubble.size,
            borderRadius: '50%',
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.55), rgba(255,255,255,0.05) 70%)',
            animation: `ocean-bubble-rise ${bubble.duration}s ease-in ${bubble.delay}s infinite`,
          }}
        />
      ))}

      {FISH.map((fish, i) => (
        <Box
          key={i}
          data-ocean-decor
          sx={{
            position: 'absolute',
            top: fish.top,
            left: 0,
            animation: `ocean-fish-swim-${fish.direction} ${fish.duration}s linear ${fish.delay}s infinite`,
          }}
        >
          <Box sx={{ transform: fish.direction === 'rtl' ? 'scaleX(-1)' : 'none' }}>
            <FishSilhouette size={fish.size} color={fish.color} />
          </Box>
        </Box>
      ))}

      <Box
        ref={waveBackRef}
        data-ocean-decor
        sx={{
          position: 'absolute',
          left: 0,
          width: '200%',
          height: 48,
          top: '22vh',
          opacity: 0.5,
          animation: 'ocean-wave-drift-back 14s linear infinite',
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 2400 48" preserveAspectRatio="none">
          <path
            d="M0 24 C 200 0, 400 48, 600 24 S 1000 0, 1200 24 S 1600 48, 1800 24 S 2200 0, 2400 24 L2400 48 L0 48 Z"
            fill="var(--color-primary-light)"
          />
        </svg>
      </Box>

      <Box
        ref={waveFrontRef}
        data-ocean-decor
        sx={{
          position: 'absolute',
          left: 0,
          width: '200%',
          height: 40,
          top: '22vh',
          animation: 'ocean-wave-drift-front 9s linear infinite',
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 2400 40" preserveAspectRatio="none">
          <path
            d="M0 20 C 150 40, 350 0, 500 20 S 850 40, 1000 20 S 1350 0, 1500 20 S 1850 40, 2000 20 S 2350 0, 2400 20 L2400 40 L0 40 Z"
            fill="var(--color-bg-secondary)"
          />
        </svg>
      </Box>

      <Box
        ref={seabedRef}
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '20vh',
          opacity: 0,
          background: 'linear-gradient(180deg, var(--color-sand-dark) 0%, var(--color-sand) 100%)',
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          style={{ position: 'absolute', inset: 0 }}
        >
          <g opacity="0.85">
            <path d="M120 200 C110 140, 140 110, 130 60 C 150 100, 160 140, 150 200 Z" fill="var(--color-accent)" />
            <path d="M160 200 C170 150, 150 120, 165 80 C 185 120, 190 160, 180 200 Z" fill="var(--color-badge-hot)" />
            <path d="M980 200 C 970 130, 1000 100, 995 50 C 1015 95, 1020 140, 1010 200 Z" fill="var(--color-badge-hot)" />
            <path d="M1030 200 C 1040 150, 1015 115, 1035 75 C 1055 115, 1058 160, 1050 200 Z" fill="var(--color-accent)" />
          </g>
          <g transform="translate(560, 170)" opacity="0.9">
            <ellipse cx="0" cy="0" rx="26" ry="16" fill="var(--color-badge-hot)" />
            <line x1="-22" y1="4" x2="-40" y2="20" stroke="var(--color-badge-hot)" strokeWidth="4" strokeLinecap="round" />
            <line x1="-14" y1="12" x2="-26" y2="30" stroke="var(--color-badge-hot)" strokeWidth="4" strokeLinecap="round" />
            <line x1="22" y1="4" x2="40" y2="20" stroke="var(--color-badge-hot)" strokeWidth="4" strokeLinecap="round" />
            <line x1="14" y1="12" x2="26" y2="30" stroke="var(--color-badge-hot)" strokeWidth="4" strokeLinecap="round" />
            <circle cx="-24" cy="-14" r="7" fill="var(--color-badge-hot)" />
            <circle cx="24" cy="-14" r="7" fill="var(--color-badge-hot)" />
          </g>
        </svg>
      </Box>
    </Box>
  )
}

export default OceanBackground
