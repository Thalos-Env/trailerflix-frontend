import { Routes, Route, Navigate } from 'react-router-dom'
import SignUp from './pages/signUp/SignUp'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/pagina-inicial' element={<p>Página Inicial</p>} />
      <Route path='/teste' element={<p>Página teste</p>} />
      <Route path='/cadastro' element={<SignUp />} />
      <Route path='*' element={<Navigate to='/pagina-inicial' />} />
    </Routes>
  )
}

export default AppRoutes
