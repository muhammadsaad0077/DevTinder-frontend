import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { useSelector } from 'react-redux'

const Body = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();


  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]); 

 
  return (
    <>

     <Navbar />
     <Outlet />
     <Footer />

    </>

  )
}

export default Body