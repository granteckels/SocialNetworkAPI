import { Schema, model, Types } from 'mongoose';

interface User {
  username: string;
  email: string;
  thoughts: Types.ObjectId[];
  friends: Types.ObjectId[];
  friendcount: number;
}

const userSchema = new Schema<User>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {
  virtuals: {
    friendcount: {
      get(this: User) {
        return this.friends.length;
      }
    }
  }
});

const User = model<User>('User', userSchema);

export default User;
