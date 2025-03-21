import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { createSocketConnection } from "../utils/socket";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


const Chat = () => {
    const { targetUserId } = useParams();
    const user = useSelector(store => store?.user);
    const userId = user?._id;
    const userIcon = user?.photo;
    const firstName = user?.firstName;
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("");


      useEffect(()=>{
        const socket = createSocketConnection();
        // As soon as page loads, socket connection is made and joinChat event is emitted
        socket.emit("joinChat", {firstName, userId, targetUserId});

        socket.on("meesageReceived", ({firstName, text}) =>{
         
          setMessages((messages) => [...messages, {firstName, text}])
          
        })

        return ()=>{
          socket.disconnect(); // THis will run when the components unmounts
        }
      }, [userId, targetUserId, firstName])

      const sendMessage = () => {
        const socket = createSocketConnection();
        socket.emit("sendMessage", {
          firstName,
          userId,
          targetUserId,
          text: newMessage,
        })
        setNewMessage("")
       
        
      };

      
    
      return (
        <div className="flex flex-col w-full max-w-md mx-auto h-[600px] mt-10 mb-10 p-4 bg-base-200">
          <h2 className="text-xl font-bold text-center py-4">Chat</h2>
          <div className="flex-1 overflow-y-auto p-2 space-y-4">
                {messages?.map((msg, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-start gap-3"
                    >
                        <img src={userIcon} alt="User" className="w-8 h-8 rounded-full border border-gray-500" />
                        <div className="bg-blue-600 text-white p-3 rounded-xl shadow-md max-w-xs">
                            <p className="text-sm font-semibold mb-1">{msg.firstName}</p>
                            <p className="text-md">{msg.text}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
          <div className="flex gap-2 p-2 bg-base-100 rounded-lg shadow-md">
            <input
              className="flex-1 input input-bordered"
              placeholder="Type a message..."
              value={ newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={sendMessage} className="btn btn-primary">Send</button>
          </div>
        </div>
      );
}

export default Chat
