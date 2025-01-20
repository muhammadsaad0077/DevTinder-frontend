import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Body from './Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<Body />}>
         <Route path='/login' element={<Login />} />
         <Route path='/signup' element={<Signup />} />
        </Route>
      </Routes>
     
     
     
     </BrowserRouter>
    </>
  )
}

export default App
