// require("dotenv").config({ path: "./env" });
//above is the another way of importing things
//you need to use as early as dotenv file
import dotenv from "dotenv";
// import mongoose, { connect } from "mongoose";
// import DB_NAME from "./constants";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});
connectDB();

//always DB's are always part of the other continent
//so let it be async
//there will be always problem in one or the other
//in conncecting the database so use trycatch

/*
1st approach:we can also use IIFE or define a function
and call it.
const app = express()
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERR", error);
      //if we throw the error the process will exit
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR", error);
    throw err;
  }
})();
*/
