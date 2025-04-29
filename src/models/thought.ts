import { Schema, model } from 'mongoose';
import reactionSchema, { Reaction } from "./reaction.js"

interface Thought {
  thoughtText: string;
  createdAt: Date;
  username: string;
  reactions: Reaction;
}

const thoughtSchema = new Schema<Thought>({
  thoughtText: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
  username: { type: String, required: true },
  reactions: [reactionSchema]
});

const Thought = model('Thought', thoughtSchema);

export default Thought;
