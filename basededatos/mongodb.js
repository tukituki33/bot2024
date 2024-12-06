import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export async function connectDB() {
  try {
    await mongoose.connect("mongodb+srv://alexismite:tSdqQMQG1HhlYyHR@argentina.k4pcomi.mongodb.net/?retryWrites=true&w=majority&appName=argentina", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(()=>{
        console.log("======DB connection successful======")
    })

    mongoose.connection.onOpen('open', () => {
    })
  
  } catch (e) {
    console.log('Algo como error',e);
  }
}