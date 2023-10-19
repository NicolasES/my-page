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
