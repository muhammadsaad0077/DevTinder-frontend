import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { createSocketConnection } from "../utils/socket";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


const Chat = () => {
    const { targetUserId } = useParams();
    const user = useSelector(store => store?.user);
    const userId = user?._id;
    const firstName = user?.firstName;

    const [messages, setMessages] = useState([
        { text: "Hello! How can I help you today?", sender: "bot" },
      ]);
      const [input, setInput] = useState("");

      
    
      const sendMessage = () => {
        if (!input.trim()) return;
        const newMessages = [...messages, { text: input, sender: "user" }];
        setMessages(newMessages);
        setInput("");
    
        setTimeout(() => {
          setMessages((prev) => [...prev, { text: "Got it!", sender: "bot" }]);
        }, 1000);
      };


      useEffect(()=>{
        const socket = createSocketConnection();
        // As soon as page loads, socket connection is made and joinChat event is emitted
        socket.emit("joinChat", {firstName, userId, targetUserId});

        return ()=>{
          socket.disconnect(); // THis will run when the components unmounts
        }
      }, [userId, targetUserId, firstName])

      
    
      return (
        <div className="flex flex-col w-full max-w-md mx-auto h-[600px] mt-10 mb-10 p-4 bg-base-200">
          <h2 className="text-xl font-bold text-center py-4">Chat</h2>
          <div className="flex-1 overflow-y-auto p-2 space-y-2">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`chat ${msg.sender === "user" ? "chat-end" : "chat-start"}`}
              >
                <div className="chat-bubble bg-primary text-white p-3 rounded-lg shadow-md">
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex gap-2 p-2 bg-base-100 rounded-lg shadow-md">
            <input
              className="flex-1 input input-bordered"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendMessage} className="btn btn-primary">Send</button>
          </div>
        </div>
      );
}

export default Chat
