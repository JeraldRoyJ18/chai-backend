import express from "express";
import cors from "cors";
//the below is used to make crud operation on cookies stored on the browser , when we use safe cookies on our browser this package will be helpful only this cookieparser will be able to read or remove the cookies
import cookieParser from "cookie-parser";

const app = express();
//app.use is used for setting configuration and the middleware
//here i am trying to use cors as the middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    //here we can explore things the tutot says
    credentials: true,
  })
);
//if we are taking json we wont be getting
//ulimited json so is the below line
app.use(express.json({ limit: "15kb" }));
//if we get the data from the url we use the below line
//extended means : we can send object inside the objects
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
//here if any things like pdf,file and folders comes
//we will try to store things in server which also will be
//available to the public
app.use(express.static("public"));
app.use(cookieParser());

export { app };
