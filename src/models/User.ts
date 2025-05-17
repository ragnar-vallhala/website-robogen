// models/User.ts
import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  // Add other Google profile fields
}, { timestamps: true });

export default models.User || model('User', userSchema);