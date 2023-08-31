import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/light'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
