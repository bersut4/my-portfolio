import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import { usePortfolio } from '../context/PortfolioContext'

const FeedbackSnackbar = () => {
  const { feedback, clearFeedback } = usePortfolio()

  return (
    <Snackbar
      key={feedback?.key}
      open={Boolean(feedback)}
      autoHideDuration={2500}
      onClose={clearFeedback}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert
        onClose={clearFeedback}
        severity={feedback?.severity ?? 'success'}
        variant="filled"
        role="status"
        sx={{ backgroundColor: feedback?.severity === 'error' ? undefined : 'var(--color-secondary)', color: feedback?.severity === 'error' ? undefined : 'var(--color-primary-dark)' }}
      >
        {feedback?.message}
      </Alert>
    </Snackbar>
  )
}

export default FeedbackSnackbar
