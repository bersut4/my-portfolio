import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2DD4BF',
      light: '#5EEAD4',
      dark: '#0D9488',
      contrastText: '#071019',
    },
    secondary: {
      main: '#FF8A65',
      contrastText: '#071019',
    },
    background: {
      default: '#071019',
      paper: '#123047',
    },
    text: {
      primary: '#E6F1F5',
      secondary: '#8FB8C7',
      disabled: '#4A6572',
    },
    divider: '#16323F',
    error: { main: '#FF6B6B' },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 700 },
    h2: { fontSize: '2rem',   fontWeight: 700 },
    h3: { fontSize: '1.5rem', fontWeight: 600 },
    h4: { fontSize: '1.25rem',fontWeight: 600 },
    body1: { fontSize: '1rem',    lineHeight: 1.7 },
    body2: { fontSize: '0.875rem',lineHeight: 1.6 },
  },
  spacing: 8,
  shape: { borderRadius: 8 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
          borderRadius: 8,
        },
        containedPrimary: {
          color: '#071019',
          '&:hover': { backgroundColor: '#5EEAD4' },
        },
        sizeLarge: {
          minHeight: 44,
          paddingLeft: 32,
          paddingRight: 32,
          borderRadius: 999,
        },
        sizeMedium: {
          minHeight: 40,
        },
        sizeSmall: {
          minHeight: 36,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        sizeLarge: {
          minWidth: 44,
          minHeight: 44,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#123047',
          border: '1px solid #16323F',
          borderRadius: 12,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#071019',
          borderBottom: '1px solid #1C4A52',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#16323F' },
            '&:hover fieldset': { borderColor: '#2DD4BF' },
            '&.Mui-focused fieldset': { borderColor: '#2DD4BF' },
          },
        },
      },
    },
  },
})

export default theme
