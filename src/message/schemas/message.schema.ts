import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
  message: String,
  latitude: Number,
  longitude: Number,
  email: String,
  userName: String,
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});
