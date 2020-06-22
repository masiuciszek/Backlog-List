import mongoose, { Schema, Document, HookNextFunction } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface User extends Document {
  email: string;
  password: string;
  createdAt: string;
  matchPassword: (inputPassword: string) => Promise<boolean>;
}

const userSchema = new Schema<User>({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.pre<User>('save', async function (next: HookNextFunction) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(8);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.matchPassword = async function (
  inputPassword: string,
): Promise<boolean> {
  return await bcrypt.compare(inputPassword, this.password);
};

export default mongoose.models.User || mongoose.model<User>('User', userSchema);
