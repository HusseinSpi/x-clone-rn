import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await  mongoose.connect(process.env.MONGODB);
        console.log('Connected to DB Successfully');
    } catch (error) {
        console.error("Connect DB failed: ", error);
        process.exit(1);
    }
}