// require("dotenv").config({ path: "./env" });
//above is the another way of importing things
//you need to use as early as dotenv file
import dotenv from "dotenv";
// import mongoose, { connect } from "mongoose";
// import DB_NAME from "./constants";
import connectDB from "./db/index.js";
import app from "./app.js";
dotenv.config({
  path: "./env",
});

//whenever the asynchronous code is written
//technically it will returns us a promise
//so we are using then and catch here

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port :
     ${process.env.PORT}`);
      //the above line can create a problem
      //since if 8000 goes into play
    });
    //the below line catches the async error
    app.on("error", (error) => {
      console.log("ERR:", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("MONGO DB CONNECTION FAILED : ", err);
  });

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
