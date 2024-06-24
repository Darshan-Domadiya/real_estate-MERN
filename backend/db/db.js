import mongoose from "mongoose";
import { DB_NAME } from "../utils/constant.js";

async function connectDB() {
  try {
    await mongoose
      .connect(`${process.env.MONGO_URI}/${DB_NAME}`)
      .then(() => console.log(`MongoDB connected!`))
      .catch(() =>
        console.log("ERROR while connecting to the database", error)
      );
  } catch (error) {
    console.log("ERROR :", error);
  }
}

export default connectDB;
