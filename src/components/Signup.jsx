import axios from 'axios'
import React, { useState } from 'react'
import { base_url } from '../utils/constants'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'

const Signup = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState("")
  const [about, setAbout] = useState("")
  const [photoUrl, setPhotoUrl] = useState("")
  const [skills, setSkills] = useState([])
  const [gender, setGender] = useState("")
  const [phoneNo, setPhoneNo] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")

  const handleSignup = async() => {
    
    try
    {
    const response = await axios.post(`${base_url}/signup`, {
      firstName, lastName, password, about, photoUrl, skills, gender, phoneNo, email, age
    })
    console.log(response.data);
    dispatch(addUser(response.data))
    
  }
  catch(err){
    console.log(`Error: ${err.message}`);
    
  }
  }
  return (
    <div className="flex justify-center mt-16">
  <div className="w-[600px] bg-base-200 shadow-lg rounded-2xl p-10">
    <h2 className="text-2xl font-bold text-center mb-6 text-gray-300">Sign Up</h2>
    <div className="space-y-4">
      {/* First Name Field */}
      <div>
        <label htmlFor="firstName" className="block font-medium text-gray-300">
          First Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          id="firstName"
          placeholder="Enter your first name"
          className="block mt-2 w-full bg-base-200 p-3 text-sm border border-gray-500 focus:border-gray-400 rounded-lg shadow-sm"
          required
        />
      </div>

      {/* Last Name Field */}
      <div>
        <label htmlFor="lastName" className="block font-medium text-gray-300">
          Last Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="lastName"
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter your last name"
          className="block mt-2 w-full bg-base-200 p-3 text-sm border border-gray-500 focus:border-gray-400 rounded-lg shadow-sm"
          required
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block font-medium text-gray-300">
          Email<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="block mt-2 w-full bg-base-200 p-3 text-sm border border-gray-500 focus:border-gray-400 rounded-lg shadow-sm"
          required
        />
      </div>

      {/* Password Field */}
      <div>
        <label htmlFor="password" className="block font-medium text-gray-300">
          Password<span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="block mt-2 w-full bg-base-200 p-3 text-sm border border-gray-500 focus:border-gray-400 rounded-lg shadow-sm"
          required
        />
      </div>

      {/* Gender Field */}
      <div>
        <label htmlFor="gender" className="block font-medium text-gray-300">
          Gender
        </label>
        <select
          id="gender"
          onChange={(e) => setGender(e.target.value)}
          className="block mt-2 w-full bg-base-200 p-3 text-sm border border-gray-500 focus:border-gray-400 rounded-lg shadow-sm"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Skills Field */}
      <div>
        <label htmlFor="skills" className="block font-medium text-gray-300">
          Skills
        </label>
        <input
          type="text"
          id="skills"
          onChange={(e) => setSkills(e.target.value)}
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
          type="url"
          id="photoUrl"
          onChange={(e) => setPhotoUrl(e.target.value)}
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
          onChange={(e) => setAbout(e.target.value)}
          placeholder="Tell us about yourself"
          className="block mt-2 w-full bg-base-200 p-3 text-sm border border-gray-500 focus:border-gray-400 rounded-lg shadow-sm"
          rows="3"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleSignup}
          type="submit"
          className="py-2 px-8 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition"
        >
        <Link to='/'>
          Sign Up
          </Link>
        </button>
      </div>
    </div>
  </div>
</div>

  )
}

export default Signup