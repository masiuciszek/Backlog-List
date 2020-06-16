import mongoose, { Schema, Document } from 'mongoose';

interface Backlog extends Document {
  text: string;
  completed: boolean;
  important: boolean;
  desc: string;
  liked: boolean;
  createdAt: string;
}

const backlogSchema = new Schema<Backlog>({
  text: {
    type: String,
    required: true,
    unique: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  liked: {
    type: Boolean,
    default: false,
  },
  important: {
    type: Boolean,
    default: false,
  },
  desc: {
    type: String,
    maxlength: 200,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.models.Backlog ||
  mongoose.model<Backlog>('Backlog', backlogSchema);
