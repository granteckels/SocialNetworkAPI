import { Schema, model, Types } from 'mongoose';
// import Thought from './thought';

interface User {
  username: string;
  email: string;
  thoughts: Types.ObjectId;
  friends: Types.ObjectId;
}

const userSchema = new Schema<User>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  thoughts: { type: Schema.Types.ObjectId, ref: 'Thought' },
  friends: { type: Schema.Types.ObjectId, ref: 'User' }
});

const User = model<User>('User', userSchema);

// TODO: Add a comment describing the functionality of the code below
// Create a document of the book below which conforms to the Book model we just created
// Book
//   .create({
//     title: 'Diary of Anne Frank',
//     author: 'Anne Frank',
//     publisher: 'Scholastic',
//     stockCount: 10,
//     price: 10,
//     inStock: true,
//   })
//   .then(result => console.log('Created new document', result))
//   .catch(err => console.log(err));

// TODO: Add a comment describing the difference between this instance being created and the instance that was created above
// It only includes one optional field
// Book
//   .create({
//     title: 'Oh the Places You Will Go!',
//     author: 'Dr. Seuss'
//   })
//   .then(result => console.log('Created new document', result))
//   .catch(err => console.log(err));

// TODO: Add a comment describing the difference between this instance being created and the instance that was created above
// Excludes all optional fields
// Book
// .create({ title: 'Harold and the Purple Crayon' })
//   .then(result => console.log('Created new document', result))
//   .catch(err => console.log(err));

export default User;
