import { Schema } from 'mongoose';

export interface Reaction {
    reactionBody: string;
    username: string;
    createdAt: Date;
}

const reactionSchema = new Schema<Reaction>({
  reactionBody: { type: String, required: true },
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
});

export default reactionSchema;
