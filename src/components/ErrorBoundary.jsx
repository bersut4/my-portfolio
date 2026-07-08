import { Component } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary]', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box
          role="alert"
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            px: 3,
            textAlign: 'center',
            backgroundColor: 'var(--color-bg-primary)',
            color: 'var(--color-text-primary)',
          }}
        >
          <Typography variant="h5">문제가 발생했어요</Typography>
          <Typography variant="body2" sx={{ color: 'var(--color-text-secondary)' }}>
            페이지를 표시하는 중 오류가 발생했습니다. 새로고침해서 다시 시도해주세요.
          </Typography>
          <Button variant="contained" onClick={() => window.location.reload()}>
            새로고침
          </Button>
        </Box>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
