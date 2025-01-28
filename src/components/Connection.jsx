import axios from 'axios'
import React, { useEffect } from 'react'
import { base_url } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../utils/connectionSlice'
import UserCard from './UserCard'

const Connection = () => {
    const dispatch = useDispatch()
    const user = useSelector(store => store.connection);
    const isConnection = true;

    const handleConnections = async()=>{
        if(user){
            return null;
        }
     try{
        const response = await axios.get(`${base_url}/user/connections`, {
            withCredentials: true
        })
        dispatch(addConnections(response?.data?.data))
        
     }
     catch(err){
        console.log(err.message);
        
     }

    }


    useEffect(()=>{
        handleConnections();
    }, [])
  return (
    <div className='flex'>
        {
          user?.map((user, index)=>{
            return <UserCard key={index} user={user} isConnection={isConnection}/>
          })
          
        }
    </div>
  )
}

export default Connection