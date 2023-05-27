import { Routes, Route, Navigate } from 'react-router-dom'
import { Video } from './pages/video/Video'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/pagina-inicial' element={<p>Página Inicial</p>} />
      <Route path='/teste' element={<p>Página teste</p>} />
      <Route path='*' element={<Navigate to='/pagina-inicial' />} />
      <Route path='/video' element={<Video />} />
    </Routes>
  )
}

export default AppRoutes
