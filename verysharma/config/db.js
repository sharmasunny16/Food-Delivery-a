import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://sunnysharma:9315550682@cluster0.cxocfjn.mongodb.net/food-delivery').then(()=>console.log('DB Connected'));
}