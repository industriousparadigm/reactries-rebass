import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
import CountriesList from './CountriesList'
import { Box } from 'rebass'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>A-aa-aa- ...'m hooked on a feeling!</h1>
      <CountriesList />
    </ThemeProvider>
  )
}

export default App
