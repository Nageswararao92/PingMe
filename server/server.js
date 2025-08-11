import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js" 
dotenv.config();
import connectDB from './config/db.js';
const app=express();
app.use(express.json());
app.use(cors());
await connectDB();
app.use("/api/inngest", serve({ client: inngest, functions }));
app.get('/',(req,res)=>{
    res.send("Server is running");
    
})
const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server is listening to port ${PORT}`)
})