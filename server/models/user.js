import mongoose from "mongoose";
import { use } from "react";

const userSchema=new mongoose.Schema({
     _id:{type:String ,required:true},
     email:{type:String,required:true},
      full_name:{type:String ,required:true},
      username:{type:String ,required:true},
       bio:{type:String, default:'Hey there im using ping up'},
        profile_picture:{type:String ,default:''},
         cover_photo:{type:String ,default:''},
         location:{type:String,default:''},
         followers:[{type:String,ref:'user'}],
         following:[{type:String,ref:'user'}],
         connections:[{type:String,ref:'user'}]
},{timestamps:true,minimize:false})
const User=mongoose.model('User',userSchema);
export default User