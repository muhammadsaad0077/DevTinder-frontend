import axios from 'axios'
import React, { useEffect } from 'react'
import { base_url } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequest, removeRequest } from '../utils/requestSlice'
import UserCard from './UserCard'
import { addConnections } from '../utils/connectionSlice'

const ConnectionRequest = () => {
    const dispatch = useDispatch();
    const requests = useSelector(store => store.request);
    const isRequest = true;

    const handleRequestReview = async(status, id) =>{
        try{
        const response = await axios.post(`${base_url}/connection/review/${status}/${id}`, {}, {
            withCredentials: true
        })
        dispatch(removeRequest())
        
        }
        catch(err){
            console.log(err.message);
            
        }

    }
    

    const fetchConnectionRequest = async()=>{
        try{
            if(requests){
                return null;
            }
            const response = await axios.get(`${base_url}/user/request`,{
            withCredentials: true
        })
            dispatch(addRequest(response.data.pendingRequests))                      
            
        }
        catch(err){
            console.log(err.message);
            
        }
    }

    useEffect(()=>{
        fetchConnectionRequest()
        
    }, [])
  return (
    <div className='flex'>
    {requests && (
        requests.map((user, index)=>{            
            return <UserCard key={index} user={user.fromUserId} handleRequestReview={handleRequestReview} isRequest={isRequest}/>
        })
    )}
      
    </div>
  )
}

export default ConnectionRequest