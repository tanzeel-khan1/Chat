import React from "react";

const Messages = ({ message }) => {
  const userInfoString = localStorage.getItem("userInfo");
  console.log("Raw localStorage userInfo:", userInfoString);
  
  const authUser = userInfoString ? JSON.parse(userInfoString) : null;
  
  
  const senderId = message.sender?._id || message.sender || message.senderId;
  const currentUserId = authUser?.user?.id || authUser?.user?._id || authUser?._id;
  
  
  
  // Check if message sender matches current user (compare as strings to be safe)
  const itsme = String(senderId) === String(currentUserId);
  
  

  // Different colors for sent (blue) and received (gray) messages
  const chatColor = itsme 
    ? "bg-blue-500 text-white" 
    : "bg-gray-700 text-white";
  const roundedClass = itsme 
    ? "rounded-xl rounded-br-none" 
    : "rounded-xl rounded-bl-none";
  
  // Alignment: flex justify-end for sent messages, justify-start for received
  const alignmentClass = itsme ? "justify-end" : "justify-start";
  
  

  return (
    <>
      <div className={`flex ${alignmentClass} w-full px-4 py-2`}>
        <div className={`${chatColor} px-4 py-2 ${roundedClass} max-w-xs break-words`}>
          {message.message}
        </div>
      </div>
    </>
  );
};

export default Messages;

