// 마우스가 있는 기기에서만 hover 애니메이션을 적용해 터치 기기에서
// hover 상태가 탭 이후에도 고정되어 보이는 문제를 피한다.
const HOVER_CAPABLE = '@media (hover: hover) and (pointer: fine)'

export const buttonHoverSx = (glow = 'rgba(45,212,191,0.35)') => ({
  transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease',
  willChange: 'transform',
  [HOVER_CAPABLE]: {
    '&:hover': {
      transform: 'perspective(700px) translateY(-4px) rotateX(4deg) scale(1.03)',
      boxShadow: `0 16px 32px ${glow}`,
    },
  },
  '&:focus-visible': {
    transform: 'perspective(700px) translateY(-4px) scale(1.03)',
    boxShadow: `0 16px 32px ${glow}`,
  },
  '&:active': {
    transform: 'perspective(700px) translateY(-1px) scale(0.98)',
  },
})

export const cardHoverSx = (glow = 'rgba(45,212,191,0.25)', extraHover = {}) => ({
  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
  willChange: 'transform',
  [HOVER_CAPABLE]: {
    '&:hover': {
      transform: 'translateY(-8px) scale(1.015)',
      boxShadow: `0 20px 40px ${glow}`,
      ...extraHover,
    },
  },
  '&:focus-within': {
    transform: 'translateY(-8px) scale(1.015)',
    boxShadow: `0 20px 40px ${glow}`,
    ...extraHover,
  },
})

export const iconHoverSx = (glow = 'var(--color-secondary)') => ({
  transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.3s ease',
  [HOVER_CAPABLE]: {
    '&:hover': {
      transform: 'rotate(12deg) scale(1.2)',
      filter: `drop-shadow(0 0 6px ${glow})`,
    },
  },
})

export const skillChipHoverSx = (color = 'var(--color-secondary)') => ({
  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
  '& .MuiChip-icon': { transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' },
  [HOVER_CAPABLE]: {
    '&:hover': {
      transform: 'translateY(-3px) scale(1.06)',
      boxShadow: `0 8px 20px ${color}55`,
      borderColor: color,
    },
    '&:hover .MuiChip-icon': { transform: 'rotate(360deg) scale(1.2)' },
  },
})

export const imageZoomSx = () => ({
  transition: 'transform 0.5s ease, filter 0.4s ease',
  [HOVER_CAPABLE]: {
    '&:hover': {
      transform: 'scale(1.08)',
      filter: 'brightness(1.08) saturate(1.15)',
    },
  },
})
