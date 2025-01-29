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
import Profile from './components/Profile'
import EditProfile from './components/EditProfile'
import Footer from './components/Footer'
import Connection from './components/Connection'
import ConnectionRequest from './components/ConnectionRequest'

function App() {

  return (
   
    <Provider store={appStore}>
     <BrowserRouter basename='/'>

      <div className="flex flex-col min-h-screen">         
          <Navbar />
     

       <main className='flex-grow'>
       <Routes>
        
        <Route path="/" element={<Body />}>
         <Route path='/' element={<Feed />}/>
         <Route path='/login' element={<Login />} />
         <Route path='/signup' element={<Signup />} />
         <Route path='/profile' element={<Profile />} />
         <Route path='/profile/edit' element={<EditProfile />}/>
         <Route path='/connections' element={<Connection />}/>
         <Route path='/requests' element={<ConnectionRequest />}/>
        </Route>
       </Routes>
       </main>
       <Footer />
      </div>

     
     </BrowserRouter>
    </Provider>
   
  )
}

export default App
