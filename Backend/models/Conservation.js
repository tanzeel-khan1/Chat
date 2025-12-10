import mongoose, { Types }  from "mongoose";
import User from "../models/User"

const conservationSchema = new mongoose.Schema({
participants: [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    },
],
messages: [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    },
],
})