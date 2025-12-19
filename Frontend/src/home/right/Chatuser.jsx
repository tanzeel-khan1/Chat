import React from "react";
import useConversation from "../../stateman/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

const Chatuser = () => {
  const { selectedConversation } = useConversation();
  const { onlineUsers = [] } = useSocketContext();

  if (!selectedConversation) return null;

  const isOnline = onlineUsers.includes(
    String(selectedConversation._id)
  );

  return (
    <div className="p-3 flex items-center gap-3 h-[12vh] bg-[#071952] hover:bg-gray-600 duration-300 cursor-pointer">
      
      {/* Avatar */}
      <div className="relative">
        <img
          src="./avater.png"
          alt="avatar"
          className="w-12 h-12 rounded-full"
        />

        {/* Online / Offline Dot */}
        <span
          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-900 ${
            isOnline ? "bg-green-500" : "bg-gray-400"
          }`}
        />
      </div>

      {/* User Info */}
      <div>
        <h1 className="text-xl text-white">
          {selectedConversation.name}
        </h1>
        <span className="text-sm text-gray-300">
          {isOnline ? "online" : "offline"}
        </span>
      </div>
    </div>
  );
};

export default Chatuser;
