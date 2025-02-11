import axios from 'axios'
import { useEffect } from 'react'
import { base_url } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequest, removeRequest } from '../utils/requestSlice'
import UserCard from './UserCard'
import { addOneConnection } from '../utils/connectionSlice'

const ConnectionRequest = () => {
    const dispatch = useDispatch();
    const requests = useSelector(store => store.request) || []; // Ensure it's an array
    const isRequest = true;

    const handleRequestReview = async (status, id) => {
        try {
            const response = await axios.post(`${base_url}/connection/review/${status}/${id}`, {}, {
                withCredentials: true
            });
            dispatch(removeRequest(id));

            if (status === "accepted") {
                dispatch(addOneConnection(id));
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    const fetchConnectionRequest = async () => {
        try {
            if (requests.length > 0) { // Avoid unnecessary API calls
                return;
            }
            const response = await axios.get(`${base_url}/user/request`, {
                withCredentials: true
            });

            dispatch(addRequest(response.data?.pendingRequests || [])); // Ensure we dispatch an array
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        fetchConnectionRequest();
    }, []);

    return (
        <div className='flex'>
            {requests.length === 0 ? (
                <h1 className='text-center text-3xl mt-10 font-bold'>No Requests Found</h1>
            ) : (
                requests.map((user, index) => (
                    <UserCard 
                        key={index} 
                        id={user._id} 
                        user={user.fromUserId} 
                        handleRequestReview={handleRequestReview} 
                        isRequest={isRequest} 
                    />
                ))
            )}
        </div>
    );
};

export default ConnectionRequest;
