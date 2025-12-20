import React from "react";
import useConversation from "../../stateman/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { ArrowLeft } from "lucide-react";

const Chatuser = ({ setShowSidebar }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers = [] } = useSocketContext();

  if (!selectedConversation) return null;

  const isOnline = onlineUsers.includes(
    String(selectedConversation._id)
  );

  const handleBack = () => {
    setSelectedConversation(null);
    if (setShowSidebar) {
      setShowSidebar(true);
    }
  };

  return (
    <div className="p-3 md:p-4 flex items-center gap-3 h-[12vh] min-h-[60px] bg-[#071952] hover:bg-gray-600 duration-300">
      {/* Mobile Back Button */}
      <button
        onClick={handleBack}
        className="md:hidden p-2 hover:bg-gray-700 rounded-lg transition-colors"
      >
        <ArrowLeft className="w-5 h-5 text-white" />
      </button>
      
      {/* Avatar */}
      <div className="relative flex-shrink-0">
        <img
          src="./avater.png"
          alt="avatar"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full"
        />

        {/* Online / Offline Dot */}
        <span
          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-900 ${
            isOnline ? "bg-green-500" : "bg-gray-400"
          }`}
        />
      </div>

      {/* User Info */}
      <div className="flex-1 min-w-0">
        <h1 className="text-lg md:text-xl text-white truncate">
          {selectedConversation.name}
        </h1>
        <span className="text-xs md:text-sm text-gray-300">
          {isOnline ? "online" : "offline"}
        </span>
      </div>
    </div>
  );
};

export default Chatuser;
