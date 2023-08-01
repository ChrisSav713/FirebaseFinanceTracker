import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../src/pages/home/Home'
import Login from '../src/pages/login/Login'
import Signup from '../src/pages/signup/Signup'
import Navbar from '../src/components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
