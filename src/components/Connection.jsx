import axios from 'axios'
import React, { useEffect } from 'react'
import { base_url } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../utils/connectionSlice'
import UserCard from './UserCard'

const Connection = () => {
    const dispatch = useDispatch()
    const user = useSelector(store => store.connection) || [];
    const isConnection = true;

    const handleConnections = async()=>{
        if(user?.length > 0){
            return;
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
          user?.length === 0 ?
          <h1 className='text-center text-3xl mt-10 font-bold'>No connections found!</h1>:
          user?.map((user, index)=>{
            return <UserCard key={index} user={user} isConnection={isConnection}/>
          })
          
        }
    </div>
  )
}

export default Connection