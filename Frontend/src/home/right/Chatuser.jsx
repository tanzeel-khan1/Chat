import React from "react";
import useConversation from "../../stateman/useConversation.js";

const Chatuser = () => {
  const { selectedConversation } = useConversation();
  console.log("new", selectedConversation);
  return (
    <div className=" p-3 flex h-[12vh] bg-gray-900 hover:bg-gray-600 duration-300 cursor-pointer">
      <div class="avatar avatar-online">
        <div class="w-20 rounded-full">
          <img src="./avater.png" />
        </div>
      </div>
      <div>
        <h1 className="text-xl">{selectedConversation.name} </h1>
        <span className="text-sm">Online</span>
      </div>
    </div>
  );
};

export default Chatuser;
