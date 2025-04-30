import mongoose from 'mongoose';

const defaultDB = 'socialNetworkDB'

export async function connectDB() {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/${defaultDB}`);
        console.log(`Connected to MongoDB ${defaultDB}`);
    } catch (err) {
        console.log(`Failed to connect to MongoDB ${defaultDB}`);
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