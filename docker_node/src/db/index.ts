import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb://db/database`);

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Something went wrong....`, error);
    process.exit(1);
  }
};
