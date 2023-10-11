import express from "express";
const app = express();
import cors from "cors";
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3500;
app.listen(port, () => console.log(` app listening on port ${port}!`));
