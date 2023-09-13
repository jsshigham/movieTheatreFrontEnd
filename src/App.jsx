
import { Route, Routes } from 'react-router-dom'
import CreateMovie from './pages/CreateMovie'
import Home from './pages/Home'
import EditMovie from './pages/EditMovie'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies/create' element={<CreateMovie />} />
      <Route path='/movies/details/:id' element={<EditMovie />} />
    </Routes>
  )
}
export default App






