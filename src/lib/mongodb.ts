import mongoose from "mongoose";
const { MONGODB_URI } = process.env
if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined")
}
export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(MONGODB_URI)
        if (connection.readyState === 1) {
            console.log('MongoDB CONECTED')
            return Promise.resolve(true)
        }
    } catch (error) {
        console.log(error)
        return Promise.reject(false)
    }}