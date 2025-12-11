// import Conversation from "../models/Conversation.js";
// import Message from "../models/MessageModal.js";

// export const sendMessages = async (req, res) => {
//   // console.log("Send Msg",req.params.id,req.body.message)
//   try {
//     const { message } = req.body;
//     const { id: receiverId } = req.body;
//     const SenderId = req.user._id; // correct time logged user
//     let conservation = await Conversation.findOne({
//       participants: { $all: [SenderId, receiverId] },
//     });
//     if (!conservation) {
//       const conservation = await Conversation.create({
//         participants: [SenderId, receiverId],
//         messages: [{ sender: SenderId, message }],
//       });
//       const newMessage = new Message({
//         SenderId,
//         receiverId,
//         message,
//       });
//       if (newMessage) {
//         await newMessage.save();
//         conservation.message.push(newMessage._id);
//         res.status(201).json({ message: "message send successfullly!" });
//       }
//       await Promise.all([await conversation.save(), await newMessage.save()]);
//       res
//         .status(201)
//         .json({ message: "message send successfullly!", newMessage });
//     }
//   } catch (error) {
//     console.log("error in msg  sending" + error);
//     res.status(500).json({ message: "internal server error" });
//   }
// };
import Conversation from "../models/Conversation.js";
import Message from "../models/MessageModal.js";

export const sendMessages = async (req, res) => {
  try {
    const { message, id: receiverId } = req.body;
    const senderId = req.user._id;

    // Step 1: Find conversation
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    // Step 2: If not found, create new conversation
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    // Step 3: Create new message
    const newMessage = await Message.create({
      sender: senderId,
      receiver: receiverId,
      message,
    });

    // Step 4: Push message ID only
    conversation.messages.push(newMessage._id);
    await conversation.save();

    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
      data: newMessage,
    });

  } catch (error) {
    console.log("error in msg sending ", error);
    res.status(500).json({ message: "internal server error" });
  }
};
