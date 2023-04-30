import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import AppRoutes from './routes'

import GlobalSyles from './styles/global'
import theme from './styles/theme'
import 'react-toastify/dist/ReactToastify.css'
import { UserContextProvider } from './context/UserContext'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <BrowserRouter>
          <GlobalSyles />
          <AppRoutes />
        </BrowserRouter>
      </UserContextProvider>
    </ThemeProvider>
  )
}

export default App
