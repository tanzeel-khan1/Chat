import React from "react";

const Messages = ({ message }) => {
  const userInfoString = localStorage.getItem("userInfo");
  const authUser = userInfoString ? JSON.parse(userInfoString) : null;

  const senderId = message.sender?._id || message.sender;
  const currentUserId =
    authUser?.user?.id || authUser?.user?._id || authUser?._id;

  const itsme = String(senderId) === String(currentUserId);

  const chatColor = itsme
    ? "bg-[#272A35] text-white"
    : "bg-[#0766AD] text-white";

  const roundedClass = itsme
    ? "rounded-xl rounded-br-none"
    : "rounded-xl rounded-bl-none";

  const alignmentClass = itsme ? "justify-end" : "justify-start";

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className={`flex ${alignmentClass} w-full px-4 py-2`}>
      <div
        className={`${chatColor} px-4 py-2 ${roundedClass} max-w-xs break-words`}
      >
        <p>{message.message}</p>
        <span className="text-xs opacity-70 block text-right mt-1">
          {formattedTime}
        </span>
      </div>
    </div>
  );
};

export default Messages;
