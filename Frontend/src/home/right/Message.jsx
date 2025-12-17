import React, { useEffect, useRef } from "react";
import Messages from "./Messages";
import useGetMessages from "../../context/useGetMessages";
import Loading from "../../components/Loading";

const Message = () => {
  const { messages, loading } = useGetMessages(); // lowercase
  const lastmessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      if (lastmessageRef.current) {
        lastmessageRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [messages]);

  if (messages.length > 0) {
    messages.forEach((msg, index) => {
      console.log(`Message ${index + 1}:`, {
        id: msg._id,
        sender: msg.sender?._id || msg.sender,
        message: msg.message,
        receiver: msg.receiver,
      });
    });
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        messages.length > 0 &&
        messages.map((message) => {
          return <Messages key={message._id} message={message} />;
        })
      )}

      <div style={{ minHeight: "calc(90vh - 10vh)" }}>
        {!loading && messages.length === 0 && (
          <div>
            <p className="text-center font-bold mt-[40%]"> hi</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Message;
