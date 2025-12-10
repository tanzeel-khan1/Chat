import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  Sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  message: {
    type: String,
    required: true,
    maxlength: 1000,
    trum: true,
    Validite: [
      {
        validator: (value) => value.length > 0,
        message: "Message cannot be empty",
      },
      // {
      //     validator: (value) => /^[a-zA-Z0-9\s]*5$/.test(value),
      //     message: "Message can only contain alphanumic  charactors & spaces"

      // },
    ],
  },
  createdAt: { type: Date, default: Date.now },
  timestamps: true
});

const Message = mongoose.model("message",messageSchema)
export default Message;