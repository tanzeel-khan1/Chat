import React, { useEffect } from "react";
import Chatuser from "./Chatuser";
import Message from "./Message";
import Type from "./Type";
import useConversation from "../../stateman/useConversation";
import { useAuth } from "../../context/AuthProvider";

export default function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, []);

  return (
    <div className="w-[70%] h-screen flex flex-col bg-slate-950 text-white">
      {!selectedConversation ? (
        <NoChat />
      ) : (
        <>
          {/* Header */}
          <Chatuser />

          {/* Messages */}
          <div className="flex-1 overflow-y-auto">
            <Message />
          </div>

          {/* Input */}
          <Type />
        </>
      )}
    </div>
  );
}

const NoChat = () => {
  const { authUser } = useAuth();

  return (
    <div className="flex-1 flex items-center justify-center">
      <h1 className="text-center text-gray-400">
        Welcome {authUser?.user?.name || "Guest"},
        <br />
        select a chat to start messaging
      </h1>
    </div>
  );
};
