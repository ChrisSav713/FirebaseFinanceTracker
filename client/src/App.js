import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from '../src/pages/home/Home'
import Login from '../src/pages/login/Login'
import Signup from '../src/pages/signup/Signup'
import NotFound from './pages/NotFound'
import Navbar from '../src/components/Navbar'
import Land from '../src/pages/land/Land'
import Philosophy from './pages/philosophy/Philosophy'
import Testimonials from './pages/testimonials/Testimonials'
import About from './pages/about/About'
import Trends from './pages/Trends/Trends'
import Res from './pages/Res/Res.jsx'

import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const { authIsReady, user } = useAuthContext()
  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/resources' element={<Res />} />
            <Route path='/philosophy' element={<Philosophy />} />
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='/about' element={<About />} />
            <Route path='/trends' element={<Trends />} />
            <Route path='/' element={<Navigate to='/land' replace />} />

            <Route path='/land' element={<Land />} />

            {/* <Route
              path='/'
              element={user ? <Home /> : <Navigate to='/' replace />}
            /> */}
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
