import { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import GuestbookForm from '../components/guestbook/GuestbookForm'
import GuestbookList from '../components/guestbook/GuestbookList'
import ScrollReveal from '../components/ScrollReveal'
import { OCEAN_TEAL, OCEAN_TEXT, OCEAN_TEXT_SECONDARY } from '../utils/oceanTextColors'

const GuestbookSection = () => {
  const [refreshTrigger, setRefreshTrigger] = useState(0)

  return (
    <Box id="guestbook-section" sx={{ py: 8, scrollMarginTop: 80 }}>
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Box sx={{ width: 4, height: 28, backgroundColor: OCEAN_TEAL, borderRadius: 1 }} />
          <Typography variant="overline" sx={{ color: OCEAN_TEAL, letterSpacing: 3 }}>
            GUESTBOOK
          </Typography>
        </Box>
        <Typography variant="h3" sx={{ mb: 2, color: OCEAN_TEXT }}>
          방명록
        </Typography>
        <Typography variant="body2" sx={{ color: OCEAN_TEXT_SECONDARY, mb: 4 }}>
          방문해주셔서 감사합니다. 짧은 인사나 피드백을 남겨주세요!
        </Typography>

        <ScrollReveal>
          <GuestbookForm onSubmitted={() => setRefreshTrigger((prev) => prev + 1)} />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <GuestbookList refreshTrigger={refreshTrigger} />
        </ScrollReveal>
      </Container>
    </Box>
  )
}

export default GuestbookSection
