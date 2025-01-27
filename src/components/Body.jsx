import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { addUser } from '../utils/userSlice'
import { base_url } from '../utils/constants'

const Body = () => {
  const dispatch = useDispatch();
  const userData = useSelector(store => store.user)
  const navigate = useNavigate();
  
  
  const fetchUser = async() => {
    
    try{
      if(userData){
        return null;
      }
      const response = await axios.get(`${base_url}/profile/view`, {
      withCredentials: true
    })
    dispatch(addUser(response.data))
  }

  catch(err){
    
    navigate('/login');

    console.log(`Error: ${err.message}`);   
  }
  }



  useEffect(() => {
    fetchUser();
  }, []); 

 
  return (
    <>

     <Navbar />
     <Outlet />
     <Footer />

    </>

  )
}

export default Body