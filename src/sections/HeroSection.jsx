import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { usePortfolio } from '../context/PortfolioContext'

const HeroSection = () => {
  const { homeData } = usePortfolio()
  const { basicInfo } = homeData

  return (
    <Box
      sx={{
        minHeight: 480,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 60%, rgba(45,212,191,0.08) 0%, transparent 70%)',
        },
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center', py: 8, position: 'relative', zIndex: 1 }}>
        <Typography
          variant="overline"
          sx={{ color: 'var(--color-secondary)', letterSpacing: 6, fontSize: '0.8rem' }}
        >
          {basicInfo.name} · WEB DESIGNER
        </Typography>
        <Typography
          variant="h2"
          sx={{ color: 'var(--color-text-primary)', mt: 1, mb: 3, fontWeight: 700, letterSpacing: 1 }}
        >
          몰입한 시간만큼 실력이 되는 사람입니다
        </Typography>
        <Box sx={{ width: 60, height: 2, backgroundColor: 'var(--color-secondary)', mx: 'auto', mb: 3 }} />
        <Typography variant="body1" sx={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: 1.9 }}>
          일본어 전공, 개발 경력 0년 — 지금은 이 포트폴리오를 직접 만듭니다.
        </Typography>
      </Container>
    </Box>
  )
}

export default HeroSection
