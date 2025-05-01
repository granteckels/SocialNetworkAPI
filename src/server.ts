import express from 'express';

import dotenv from 'dotenv';
dotenv.config();

import { connectDB } from './db/db.js';
import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded())
app.use(routes);

await connectDB();
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});