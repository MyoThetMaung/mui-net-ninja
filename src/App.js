import {Button,Container} from '@mui/material'
import {orange,green} from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Text from './Text'
import Notes from './pages/Notes'
import Create from './pages/Create'
import Layout from './components/Layout'
import { Route,Routes } from 'react-router-dom'

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#fffff',
      },
      secondary : {
        main: green[500],
      }
    },
    typography : {
      fontFamily :'Roboto',
      fontSize : 15,
      fontWeightLight : 300,
      fontWeightRegular : 400,
      fontWeightMedium : 500,
      fontWeightBold : 700,

    }
  });
  
  return (
    <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Notes/>}/>
            <Route path="/create" element={<Create/>}/>
          </Route>
        </Routes>
    </ThemeProvider>
  );
}

export default App;
