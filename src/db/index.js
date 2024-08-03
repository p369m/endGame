import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  console.log(`${process.env.MONGO_DB_URL}/${DB_NAME}`);
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_DB_URL}/${DB_NAME}`
    );
    console.log("MongoDB Connected ! ");
  } catch (error) {
    console.log("MongoDB Connection ERROR", error);
    process.exit(1);
  }
};
export default connectDB;
