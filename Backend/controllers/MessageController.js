import Conversation from "../models/Conversation.js";
import Message from "../models/MessageModal.js";

export const sendMessages = async (req, res) => {
  try {
    const { message, receiverId } = req.body;
    const senderId = req.user._id;

    // ✅ Validation
    if (!receiverId) {
      return res.status(400).json({ message: "Receiver ID is required" });
    }

    if (!message || !message.trim()) {
      return res.status(400).json({ message: "Message is required" });
    }

    // Step 1: Find existing conversation
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    // Step 2: Create conversation if not exists
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
        messages: [],
      });
    }

    // Step 3: Create message (receiver will be saved now ✅)
    const newMessage = await Message.create({
      sender: senderId,
      receiver: receiverId,
      message: message.trim(),
    });

    // Step 4: Push message ID into conversation
    conversation.messages.push(newMessage._id);
    await conversation.save();

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newMessage,
    });
  } catch (error) {
    console.error("Error in sendMessages:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllMessages = async (req, res) => {
  try {
    const { id: chatuser } = req.params;

    // 🔴 safety check
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, chatuser] },
    }).populate("messages");

    if (!conversation) {
      return res.status(404).json({ message: "No Messages Found" });
    }

    res.status(200).json({ messages: conversation.messages });
  } catch (error) {
    console.log("Message getting error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
