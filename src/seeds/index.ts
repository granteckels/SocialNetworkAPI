import { connectDB, disconnectDB } from '../db/db.js';
import seedThoughts from './thought-seeds.js';
import seedUsers from './user-seeds.js';

await connectDB();

await seedThoughts();
console.log("-----THOUGHTS SEEDED-----");

await seedUsers();
console.log("-----USERS SEEDED-----");

await disconnectDB();
