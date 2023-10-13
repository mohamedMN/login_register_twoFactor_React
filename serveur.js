import express from "express";
const app = express();
import cors from "cors";
import routes from "./routes/route";
import mongoose from "mongoose";
import middleware from "./middleware/middlware";

// call the routes and middleware in route folder
app.use(middleware, routes);
// middleware for processing HTTP requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// url connection to db  from .env
const url = process.env.MONGOLAB_URI;
//connection function
async function connection() {
  try {
    await mongoose.connect(url);
    console.log("connected to db");
  } catch (err) {
    console.error(err);
  }
}
//call up conncetion function
connection();
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;
app.listen(port, () => console.log(` app listening on port ${port}!`));
