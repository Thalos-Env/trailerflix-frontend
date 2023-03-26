import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Button from './components/Button'
import AppRoutes from './routes'

import GlobalSyles from './styles/global'
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalSyles />
        <Button>Teste</Button>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
