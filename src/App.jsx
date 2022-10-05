import React from 'react';
import { useSelector } from 'react-redux';
import Layout from "./Components/Layout"
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const theme = useSelector(state => state.theme.mode)

  const darkTheme = createTheme({
    palette: {
      mode: theme
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Layout />
    </ThemeProvider>
  )
}

export default App