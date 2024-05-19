import mongoose from "mongoose";

async function connectDB(dbUrl) {
  try {
    await mongoose.connect(dbUrl);
    console.log("Connect successfully!!!");
  } catch (error) {
    console.log("Connect failure!!!");
  }
}

export default connectDB;
