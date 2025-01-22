import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from "js-cookie";
import { base_url } from '../utils/constants';


const Feed = () => {
  const [user, setUser] = useState([]);
  const userFeed = async() => {
  try
  {
    
    const response = await axios.get(`${base_url}/user/feed`, {withCredentials: true})
    setUser(response.data.filteredUsers)

  }

  catch(err){
    console.log(`Error: ${err.message}`);
    
  }
}

  useEffect(()=>{
    userFeed()
  }, [])



  return (
    <>
    <div className='flex flex-wrap gap-10'>
    { user && (
      user.map((user, index) => (
    <div key={index} className="card card-compact bg-base-100 mt-20 ml-8 w-96 shadow-xl">
  <figure>
    <img
      className='w-[260px] h-60 rounded-2xl'
      src={user.photo}
      alt="user image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{user.firstName} {user.lastName}</h2>
    
      <div className='flex'>
      <h2>Skills:</h2>
    {
      user?.skills?.map((skill, index) => {
       return <p key={index} className='ml-2'>{skill}</p>
      })
    }
      </div>
    

    <div className="card-actions justify-center gap-6">
      <button className="btn btn-primary hover:bg-green-500">Accept</button>
      <button className="btn btn-primary hover:bg-red-600">Reject</button>
    </div>
  </div>
</div>
      ))
    )}
    </div>
    </>
  )
};

export default Feed;
