import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import useSendMessage from "../../context/useSendMessage.js";

const Type = () => {
  const {loading, sendMessages} =useSendMessage();
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessages(message)
sendMessages("")
  }
  return (
    <>
     <form onSubmit={handleSubmit}>
     <div className="flex space-x-3 h-[8vh] text-center bg-gray-800">
        <div className="w-[70%] mx-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="  Type here"
            className="w-full px-3 py-3 grow outline-none h-12 rounded-lg flex items-center  bg-slate-900 border-[1px] border-gray-700"
          />
        </div>

        <button className="text-3xl">
          <IoIosSend />
        </button>
      </div>
     </form>
    </>
  );
};

export default Type;
