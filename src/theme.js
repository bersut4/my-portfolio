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
    // MUI가 팔레트 생성 시 alpha()/decomposeColor()로 실제 색상 계산에 쓰는 값들이라
    // CSS 변수 문자열을 넣으면(파싱 불가) 런타임에 크래시가 난다 — 하드코딩 색을 유지한다.
    // 다크/라이트 전환은 대부분의 컴포넌트가 직접 쓰는 var(--color-*) sx로 처리되고,
    // 이 팔레트는 MUI 기본 컴포넌트의 "항상 다크" 폴백 정도의 역할만 한다.
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
          color: 'var(--color-primary-dark)',
          backgroundImage: 'linear-gradient(135deg, #2DD4BF 0%, #2DD4BF 60%, #5EEAD4 100%)',
          backgroundSize: '200% 200%',
          backgroundPosition: '0% 50%',
          transition: 'background-position 0.5s ease',
          '@media (hover: hover) and (pointer: fine)': {
            '&:hover': { backgroundPosition: '100% 50%' },
          },
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
          backgroundColor: 'var(--color-bg-card)',
          border: '1px solid var(--color-border-dark)',
          borderRadius: 12,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--color-bg-primary)',
          borderBottom: '1px solid var(--color-border-gold)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'var(--color-border-dark)' },
            '&:hover fieldset': { borderColor: 'var(--color-secondary)' },
            '&.Mui-focused fieldset': { borderColor: 'var(--color-secondary)' },
          },
        },
      },
    },
    // palette.text.primary는 alpha() 크래시 때문에 고정 dark 색으로 둘 수밖에 없어서,
    // 입력창 글자/라벨 색은 여기서 var(--color-*)로 별도 지정해야 라이트모드에서도
    // (흰 배경 위에 어두운 글자로) 제대로 보인다. styleOverrides는 값을 그대로
    // CSS로 통과시킬 뿐이라 alpha() 크래시 위험이 없다.
    MuiInputBase: {
      styleOverrides: {
        input: { color: 'var(--color-text-primary)' },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: { color: 'var(--color-text-secondary)' },
      },
    },
  },
})

export default theme
