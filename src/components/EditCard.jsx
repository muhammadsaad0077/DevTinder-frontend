

const EditCard = ({user}) => {
  const {firstName, lastName, about, gender, phoneNo, photo, skills} = user;

  

  return (
     
    <div className="card mt-20 mx-auto bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      className='w-[300px] h-[300px]'
      src={photo}
      alt="user profile pic" />
  </figure>
  
  <div className="card-body">
    <h1 className="card-title text-2xl">{firstName} {lastName}</h1>
    <h2 className='mt-3'>{about}</h2>
    <h2>{user.email}</h2>
    {user.gender? <h2>Gender - {gender}</h2>: <h2></h2>}

  {
    skills==null?
    <div></div>
    :
    <div className='flex'>
      <h2>Skills:</h2>
    {
      skills?.map((skill, index) => {
       return <p key={index} className='ml-2'>{skill}</p>
      })
    }
      </div>
  }
  </div>
</div>
  )

}

export default EditCard