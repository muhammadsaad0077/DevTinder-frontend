import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Body from './components/Body'
import { Provider, useSelector } from 'react-redux'
import appStore from './utils/appStore'
import Feed from './components/Feed'

function App() {

  return (
   
    <Provider store={appStore}>
     <BrowserRouter basename='/'>
      <Routes>
        
        <Route path="/" element={<Body />}>
         <Route path='/' element={<Feed />}/>
         <Route path='/login' element={<Login />} />
         <Route path='/signup' element={<Signup />} />
        </Route>
      </Routes>
     </BrowserRouter>
    </Provider>
   
  )
}

export default App
