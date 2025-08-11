import mongoose from "mongoose";
const connectDB= async()=>{
    try{
        mongoose.connection.on('connected',()=>{console.log("MongoDB Connected")})
        //mongoose.connection.on('connecting',()=>{console.log("Connecting to data base now")})
        await mongoose.connect(`${process.env.MONGODB_URL}/pingUp`)
    }
    catch(err){
        console.log(err.message);
    }
}
export default connectDB