import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
  message: String,
  latitude: Number,
  longitude: Number,
  email: String,
  createdAt: { type: Date, default: Date.now },
});
