import './App.css'
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { AboutMe } from './components'

function App() {

  const styles = {
    sectionBox: {
      // height: '100vh',
      alignItems: 'center',
      display: 'flex',
      padding: '56px 0'
    },
  }


  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
    typography: {
      h1: {
        fontSize: '2.3rem',
        textAlign: 'center',
        fontWeight: '500',
        color: '#f5f5f5'
      },
      h2: {
        fontSize: '2rem',
        fontWeight: '400'
      },
      body1:{
        color: '#bdbdbd'
      },
      subtitle1: {
        color: '#00e676'
      },
      fontSize: 16,
    },
  });


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>
        <Box component="section" style={styles.sectionBox}>
          <AboutMe />
        </Box>
      </main>
    </ThemeProvider>
  )
}

export default App
