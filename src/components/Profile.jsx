import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { base_url } from '../utils/constants'

const Profile = () => {
  const [user, setUser] = useState({});
  const userProfile = async() => {
    try
    {
      const response = await axios.get(`${base_url}/profile/view`,{
      withCredentials: true
    })  
    
    setUser(response.data)      
    
    }
    catch(err){
      console.log(`Error: ${err.message}`);      
    }    
  }

  useEffect(() => {
    userProfile();
  }, [])

  return (
    (user && 
    <div className="card mt-20 mx-auto bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      className='w-[300px] h-[300px]'
      src={user.photo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h1 className="card-title text-2xl">{user.firstName} {user.lastName}</h1>
    <h2 className='mt-3'>{user.about}</h2>
    <h2>{user.email}</h2>
    {user.gender? <h2>Gender - {user.gender}</h2>: <h2></h2>}

  {
    user.skills?
    <div className='flex'>
      <h2>Skills:</h2>
    {
      user?.skills?.map((skill, index) => {
       return <p key={index} className='ml-2'>{skill}</p>
      })
    }
      </div>
    :
    <div></div>
  }
  </div>
</div>
  )
)
}

export default Profile