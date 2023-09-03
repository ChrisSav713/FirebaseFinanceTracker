import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from '../src/pages/home/Home'
import Login from '../src/pages/login/Login'
import Signup from '../src/pages/signup/Signup'
import NotFound from './pages/NotFound'
import Navbar from '../src/components/Navbar'

import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const { authIsReady, user } = useAuthContext()
  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={user ? <Home /> : <Navigate to='/login' replace />}
            />
            <Route
              path='/login'
              element={!user ? <Login /> : <Navigate to='/' replace />}
            />
            <Route
              path='/signup'
              element={!user ? <Signup /> : <Navigate to='/' replace />}
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  )
}

export default App
