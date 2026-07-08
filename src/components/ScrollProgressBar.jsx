import Box from '@mui/material/Box'
import { useScrollProgress } from '../hooks/useScrollProgress'

const ScrollProgressBar = () => {
  const progress = useScrollProgress()

  return (
    <Box
      aria-hidden="true"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: 3,
        zIndex: 1201,
        pointerEvents: 'none',
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: '100%',
          transform: `scaleX(${progress})`,
          transformOrigin: 'left center',
          background: 'linear-gradient(90deg, var(--color-secondary), var(--color-accent))',
          willChange: 'transform',
        }}
      />
    </Box>
  )
}

export default ScrollProgressBar
