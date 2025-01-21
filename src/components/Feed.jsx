import React, { useEffect } from 'react';
import axios from 'axios';
import Cookies from "js-cookie";


const Feed = () => {

  const feedProfiles = async () => {
    try {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ODI0YjBkOGZmYjFjYTk5YzJlOGViOSIsImlhdCI6MTczNzQ3MzE4OX0.YKXfPWyorE6s9hlwjlyFYcY8rxDaNbhF2Kt8d7LDwfo"; // Replace "token" with your cookie name
      if (!token) {
        throw new Error("Token not found in cookies");
      }
  
      const response = await axios.get("http://localhost:3001/user/feed", {
        headers: {
          Authorization: `${token}`, // Attach the token from cookies
        },
      });
      console.log(response.data);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  useEffect(() => {
    feedProfiles();
  }, []); // Empty dependency array ensures it runs only once after the initial render

  return <div>Feed</div>;
};

export default Feed;
