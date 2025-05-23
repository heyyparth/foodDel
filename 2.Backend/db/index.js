import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB = async () =>{
    try{ 
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("DB connected");  
    }
    catch(error){
        console.log("MongoDB Connection Error" , error);
        throw(error); 
    }
}

export default connectDB