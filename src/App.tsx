import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import AppRoutes from './routes'

import GlobalSyles from './styles/global'
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalSyles />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
