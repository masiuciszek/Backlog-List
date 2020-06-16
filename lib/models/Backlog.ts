import mongoose, { Schema, Document } from 'mongoose';

interface Backlog extends Document {
  text: string;
  completed: boolean;
  important: boolean;
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
  important: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.models.Backlog ||
  mongoose.model<Backlog>('Backlog', backlogSchema);
