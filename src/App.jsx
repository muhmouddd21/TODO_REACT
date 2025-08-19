import './App.css'
import MainSection from './components/MainSection'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

function App() {

  // Create RTL cache
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  // Create RTL theme
  const theme = createTheme({
    direction: 'rtl',
  palette: {
      primary: {
        main: '#263238',
        // light: will be calculated from palette.primary.main,
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        main: '#F5EBFF',
        light: '#E0C2FF',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#47008F',
      },
    },
  });
  return (
   <CacheProvider value={cacheRtl}> 
         <ThemeProvider theme={theme}>

        <div style={{display:"flex",backgroundColor:"#242424",justifyContent:"center",alignItems:"center",height:"100vh", direction:"rtl",}}>
          <MainSection />

        </div>
      </ThemeProvider>
   
   </CacheProvider >


   
  )
}

export default App
