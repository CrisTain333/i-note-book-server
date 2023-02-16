import routes from "./Routes";
import express from "express";
import cors from "cors";
import { MongoClient, ObjectId } from "mongodb";
require("dotenv").config();
const app = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    exposedHeaders: ["Content-Disposition"],
  })
);
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

app.use("/api/v1", routes);

app.listen(port, () => {
  console.log(`Auth Server at http://localhost:${port}`);
  try {
    client.connect();
    console.log("Connected To Db");
  } catch (error) {
    console.log(error);
  }
});
