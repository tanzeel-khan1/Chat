import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import useSendMessage from "../../context/useSendMessage.js";

const Type = () => {
  const { loading, sendMessages } = useSendMessage();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    await sendMessages(message);
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full border-t border-gray-700 bg-gray-900"
    >
      <div className="flex items-center gap-3 px-4 py-3">
        {/* Input */}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 rounded-2xl bg-gray-800 text-white outline-none border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
        />

        {/* Send Button */}
        <button
          type="submit"
          disabled={loading || !message.trim()}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 transition-colors duration-200"
        >
          <IoIosSend className="text-2xl" />
        </button>
      </div>
    </form>
  );
};

export default Type;
