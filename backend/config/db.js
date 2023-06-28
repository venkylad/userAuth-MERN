import mongoose, { mongo } from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log(`DB connected ${conn.connection.host}`);
  } catch (error) {
    console.log("Error in DB connect");
    process.exit(1);
  }
};
