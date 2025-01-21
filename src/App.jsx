import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Body from './Body'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={appStore}>
     <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<Body />}>
         <Route path='/login' element={<Login />} />
         <Route path='/signup' element={<Signup />} />
        </Route>
      </Routes>
     </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
