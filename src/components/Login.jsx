import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { base_url } from '../utils/constants';

const Login = () => {
    const [email, setEmail] = useState("hamza@gmail.com");
    const [password, setPassword] = useState("Hamza@123");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async()=>{
      try{
        const response = await axios.post(`${base_url}/login`, {
            email,
            password
        },
        {
          withCredentials: true
        }

      )
      
      dispatch(addUser(response.data))
      return navigate("/")
    }
    catch(err){
      console.log(`Error: ${err.message}`);
      
    }
    }



  return (
    <div className="flex justify-center mt-32">
      <div className="w-[450px] bg-base-200 shadow-lg rounded-2xl p-16">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-300">Login</h2>
        <div className="space-y-4">
          {/* Email Field */}
          <div className="relative mt-10">
            <label
              htmlFor="email"
              className="block font-medium text-gray-300"
            >
              Email
            </label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12H8m4 8a4 4 0 110-8 4 4 0 010 8zm8-12H4a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z"
                  />
                </svg>
              </span>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="block mt-2 w-full bg-base-200 p-3 pl-10 text-sm border border-gray-500 focus:border-gray-400 rounded-lg shadow-sm"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="relative top-1">
            <label
              htmlFor="password"
              className="block font-medium text-gray-300"
            >
              Password
            </label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11c1.656 0 3 1.344 3 3v2H9v-2c0-1.656 1.344-3 3-3zm0 10a10 10 0 110-20 10 10 0 010 20z"
                  />
                </svg>
              </span>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="block w-full mt-2 pl-10 p-3 text-sm border border-gray-500 bg-base-200 rounded-lg shadow-sm"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className='flex justify-center relative top-1'>
          <button
            type="submit"
            onClick={handleLogin}
            className="py-2 px-8 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition"
          >
            Login
          </button>
          </div>
        </div>
        <p className="text-md  text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <a
            href="#"
            className="text-indigo-600 hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login