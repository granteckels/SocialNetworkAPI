import { connectDB, disconnectDB } from '../db/db.js';
import seedThoughts from './thought-seeds.js';

await connectDB();

await seedThoughts();
console.log("-----THOUGHTS SEEDED-----");

await disconnectDB();
