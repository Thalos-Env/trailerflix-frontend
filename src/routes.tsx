import { Routes, Route, Navigate } from 'react-router-dom'
import SignUp from './pages/signUp/SignUp'
import SignIn from './pages/signIn/SignIn'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/pagina-inicial' element={<p>Página Inicial</p>} />
      <Route path='/teste' element={<p>Página teste</p>} />
      <Route path='/cadastro' element={<SignUp />} />
      <Route path='/login' element={<SignIn />} />
      <Route path='*' element={<Navigate to='/pagina-inicial' />} />
    </Routes>
  )
}

export default AppRoutes
