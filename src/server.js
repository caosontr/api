import express from "express";
import connectDB from "./config/dbconfig.js";
import productRouter from "./routes/product.js"
import userRouter from "./routes/user.js";
import dotenv from "dotenv";
import cors from "cors"

const app = express();

dotenv.config();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cors());
app.use(productRouter)
app.use(userRouter);
connectDB(process.env.DB_URI);

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Home");
});

app.listen(port, () => {
  console.log("Cổng 3000");
});
