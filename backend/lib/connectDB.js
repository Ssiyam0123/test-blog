import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:KHfT7mR0rTjI7Rmx@cluster0.kgw4w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    // await mongoose.connect(process.env.MONGO);
    console.log("MongoDB is connected");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;