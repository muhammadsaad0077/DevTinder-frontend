import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from "js-cookie";
import { base_url } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed, removeFeed } from '../utils/feedSlice';
import UserCard from './UserCard';
import { addOneConnection } from '../utils/connectionSlice';


const Feed = () => {
  const dispatch = useDispatch();
  const user = useSelector(store => store.feed)
  const feed = true;

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

  const handleRequest = async(status, id) =>{
    const response = await axios.post(`${base_url}/connection/send/${status}/${id}`, {}, {
      withCredentials: true
    })
    dispatch(removeFeed(id))
    if(status == "interested"){
    dispatch(addOneConnection(id))
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
        return <UserCard key={index} user={user} handleRequest={handleRequest} feed={feed}/>
      })
    }
    </div>
    </>
  )
};

export default Feed;
