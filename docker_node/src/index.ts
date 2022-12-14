import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db";
import { router as userRoutes } from "./routes/userRoutes";

const app = express();
dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
