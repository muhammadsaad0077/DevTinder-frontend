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
    console.log(response.data.filteredUsers);
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
    { user && (
      user.map((user) => (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={user.photo}
      alt="user image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{user.firstName}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Accept</button>
      <button className="btn btn-primary">Reject</button>
    </div>
  </div>
</div>
      ))
    )}
    </>
  )
};

export default Feed;
