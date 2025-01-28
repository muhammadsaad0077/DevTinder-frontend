import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import EditCard from './EditCard';
import axios from 'axios';
import { base_url } from '../utils/constants';
import { addUser } from '../utils/userSlice';

const EditProfile = () => {
  const user = useSelector(store => store?.user);  
  const dispatch = useDispatch();
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [about, setAbout] = useState('');
  const [photo, setPhoto] = useState('');
  const [skills, setSkills] = useState([]);
  const [gender, setGender] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');
  const [notification, setNotification] = useState(false);

  // Update state when user changes
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || '');
      setLastName(user.lastName || '');
      setAbout(user.about || '');
      setPhoto(user.photo || '');
      setSkills(user.skills || []);
      setGender(user.gender || '');
      setPhoneNo(user.phoneNo || '');
      setAge(user.age || '');
    }
  }, [user]);

  const handleUpdate = async() =>{
   try{
    const res = await axios.patch(`${base_url}/profile/edit`, {
      firstName, lastName, about, gender, phoneNo, photo, skills
    }, {withCredentials: true})

    dispatch(addUser(res.data))
    setNotification(true)

    setTimeout(()=>{
      setNotification(false)
    }, 3000)
    

   }

   catch(err){
    console.log(`${err}`);
    
   }


  }

  const handleSkills = (e) =>{
    const value = e.target.value;
    setSkills(value.split(',').map((skill) => skill.trim()))
  }

  return (
  <>
   {( user && 
    
    <div className="flex justify-center mt-16">

    {/* Notification UI */}
  {
  (notification && <div className="toast toast-top toast-center">
   <div className="alert alert-info">
    <span>Profile Updated Sucessfully</span>
   </div>
  </div>
  )
}
  <div className="w-[600px] bg-base-200 shadow-lg rounded-2xl p-10">
    <h2 className="text-2xl font-bold text-center mb-6 text-gray-300">Edit Profile</h2>
    <div className="space-y-4">
      {/* First Name Field */}
      <div>
        <label htmlFor="firstName" className="block font-medium text-gray-300">
          First Name
        </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          id="firstName"
          placeholder="Enter your first name"
          className="block mt-2 w-full bg-base-200 p-3 text-sm border border-gray-500 focus:border-gray-400 rounded-lg shadow-sm"
          
        />
      </div>

      {/* Last Name Field */}
      <div>
        <label htmlFor="lastName" className="block font-medium text-gray-300">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter your last name"
          className="block mt-2 w-full bg-base-200 p-3 text-sm border border-gray-500 focus:border-gray-400 rounded-lg shadow-sm"
          
        />
      </div>

      {/* Gender Field */}
      <div>
        <label htmlFor="gender" className="block font-medium text-gray-300">
          Gender
        </label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="block mt-2 w-full bg-base-200 p-3 text-sm border border-gray-500 focus:border-gray-400 rounded-lg shadow-sm"
        >
          <option value="">Select Gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">others</option>
        </select>
      </div>

      {/* Skills Field */}
      <div>
        <label htmlFor="skills" className="block font-medium text-gray-300">
          Skills
        </label>
        <input
          value={skills}
          type="text"
          id="skills"
          onChange={ (e) => handleSkills(e)}
          placeholder="Enter your skills (comma separated)"
          className="block mt-2 w-full bg-base-200 p-3 text-sm border border-gray-500 focus:border-gray-400 rounded-lg shadow-sm"
        />
      </div>

      {/* Photo URL Field */}
      <div>
        <label htmlFor="photoUrl" className="block font-medium text-gray-300">
          Photo URL
        </label>
        <input
          value={photo}
          type="url"
          id="photoUrl"
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="Enter photo URL"
          className="block mt-2 w-full bg-base-200 p-3 text-sm border border-gray-500 focus:border-gray-400 rounded-lg shadow-sm"
        />
      </div>

      {/* Age Field */}
      <div>
        <label htmlFor="age" className="block font-medium text-gray-300">
          Age
        </label>
        <input
          value={age}
          type="number"
          id="age"
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age"
          className="block mt-2 w-full bg-base-200 p-3 text-sm border border-gray-500 focus:border-gray-400 rounded-lg shadow-sm"
        />
      </div>

      {/* Phone Number Field */}
      <div>
        <label htmlFor="phoneNo" className="block font-medium text-gray-300">
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNo"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
          placeholder="Enter your phone number"
          className="block mt-2 w-full bg-base-200 p-3 text-sm border border-gray-500 focus:border-gray-400 rounded-lg shadow-sm"
        />
      </div>

      {/* About Field */}
      <div>
        <label htmlFor="about" className="block font-medium text-gray-300">
          About
        </label>
        <textarea
          id="about"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          placeholder="Tell us about yourself"
          className="block mt-2 w-full bg-base-200 p-3 text-sm border border-gray-500 focus:border-gray-400 rounded-lg shadow-sm"
          rows="3"
        ></textarea>
      </div>

      <p className='text-red-500 pt-1'>{error}</p>
      <div className="flex justify-center mt-6">
        <button
          onClick={handleUpdate}
          type="submit"
          className="py-2 px-8 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition"
        >
        
          Save Profile
          
        </button>
      </div>
    </div>
  </div>

  <div className='mx-20'>
    <EditCard user={{firstName, lastName, about, gender, age, phoneNo, photo, skills}}/>
  </div>
</div>
   )}
   </>
  )
}

export default EditProfile