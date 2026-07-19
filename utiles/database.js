import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

export const connectDB = async () => {
    try {
        const database = await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("MongoDB connected")
    } catch (error) {
        console.log("MongoDb database error : " + error)
    }
}