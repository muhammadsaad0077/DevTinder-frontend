import { Link } from "react-router-dom";

const UserCard = ({user, id, isConnection, isRequest, handleRequestReview, handleRequest, feed}) => {
    const {firstName, _id, lastName, photo, skills, age, gender} = user;
        
  return (
    
    <>
    
    <div className="card card-compact bg-base-100 mt-20 ml-8 w-96 shadow-xl">
  <figure>
    <img
      className='w-[260px] h-60 rounded-2xl'
      src={photo}
      alt="user image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName} {lastName}</h2>
    
      <div className='flex'>
      <h2>Skills:</h2>
    {
      skills.map((skill, index) => {
       return <p key={index} className='ml-2'>{skill}</p>
      })
    }
      </div>
    
    {
    (  !isConnection?  (
    <div className="card-actions justify-center gap-6">
      <button
      onClick={isRequest ? ( ()=> handleRequestReview("accepted", id)): feed ? (()=> handleRequest("interested", _id)): null}
      className="btn btn-primary hover:bg-green-500">{isRequest? "Accept": "Interested"}</button>

      <button
      onClick={isRequest ? ( ()=> handleRequestReview("rejected", id)): feed ? (()=> handleRequest("ignored", _id)): null}
      className="btn btn-primary hover:bg-red-600">{isRequest? "Reject": "Ignore"}</button>
    </div>
    ):
     <div>
      <Link to={`/chat/${_id}`}>
      <button
      className="btn btn-primary py-1 px-6 hover:bg-green-500">Chat</button>
      </Link>
     </div>
     
  )
   }
  </div>
</div>
      
    
    
    
    </>


  )
}

export default UserCard