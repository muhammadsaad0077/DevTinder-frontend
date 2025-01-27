import React from 'react'

const UserCard = ({user}) => {
    const {firstName, lastName, photo, skills, age, gender} = user;
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
    

    <div className="card-actions justify-center gap-6">
      <button className="btn btn-primary hover:bg-green-500">Accept</button>
      <button className="btn btn-primary hover:bg-red-600">Reject</button>
    </div>
  </div>
</div>
      
    
    
    
    </>


  )
}

export default UserCard