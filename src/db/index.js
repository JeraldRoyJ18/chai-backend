import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

//here we are purely directly connecting to the DB
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\nMongo DB connected !! : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("mongodb connection error : ", error);
    process.exit(1);
  }
};

export default connectDB;
