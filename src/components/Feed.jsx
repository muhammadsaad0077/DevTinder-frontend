import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from "js-cookie";
import { base_url } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlice';
import UserCard from './UserCard';


const Feed = () => {
  const dispatch = useDispatch();
  const user = useSelector(store => store.feed)

  const userFeed = async() => {
  try
  {
    if(user) return null;
    const response = await axios.get(`${base_url}/user/feed`, {withCredentials: true})
    dispatch(addFeed(response?.data?.filteredUsers))
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
    {
      user?.map((user, index)=>{
        return <UserCard key={index} user={user}/>
      })
    }
    </div>
    </>
  )
};

export default Feed;
