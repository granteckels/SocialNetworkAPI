import mongoose from 'mongoose';

const host = process.env.MONGODB_HOST || "127.0.0.1"
const port = process.env.MONGODB_PORT || 27017
const db = process.env.MONGODB_DB || "socialNetworkDB" 

export async function connectDB() {
    try {
        await mongoose.connect(`mongodb://${host}:${port}/${db}`);
        console.log(`Connected to MongoDB ${db}`);
    } catch (err) {
        console.log(`Failed to connect to MongoDB ${db}`);
        console.log(err);
        process.exit(1);
    }
}

export async function disconnectDB() {
    try {
        await mongoose.disconnect();
        console.log(`Disconnected from MongoDB`);
    } catch (err) {
        console.log(`Failed to properly disconnect from MongoDB`);
        console.log(err);
        process.exit(1);
    }
}