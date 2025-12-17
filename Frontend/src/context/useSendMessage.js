import { useState } from "react";
import useConversation from "../stateman/useConversation.js";
import axios from "axios";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessages = async (message) => {
    if (!message || !selectedConversation?._id) return;

    setLoading(true);
    try {
      const response = await axios.post(
        `/api/messages/send/${selectedConversation._id}`,
        { message }
      );

      // ✅ safe state update
      setMessages((prev) => [...prev, response.data]);

    } catch (error) {
      console.log("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessages };
};

export default useSendMessage;
