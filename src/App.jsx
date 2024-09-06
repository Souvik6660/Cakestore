

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Signup from './components/Signup/Signup'
import Contact from './components/Contact/Contact'
import Privacy from './components/Privacy/Privacy'
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'

function App() {
  

  return (
   <>
   <Navbar/>
   <Routes>
    
    <Route path='/' element={<Home/>}  />
    <Route path='/login' element={<Login/>}  />
    <Route path='/privacy' element={<Privacy/>}  />
    <Route path='/contact' element={<Contact/>}  />
    <Route path='/signup' element={<Signup/>}  />
   </Routes>
   </>
  )
}

export default App
