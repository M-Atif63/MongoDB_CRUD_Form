import mongoose, { Schema } from "mongoose";
import mongoosePluginate from 'mongoose-paginate-v2'
const studentSchema = new Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    age:{type:String,required:true},
    class:{type:String,required:true},
    roll_number:{type:String,required:true},
    phone:{type:String,required:true},
    email:{type:String,required:true},
    address:{type:String,required:true},
    gender:{type:String,required:true}
},{timestamps:true})


studentSchema.plugin(mongoosePluginate)

const Student = mongoose.model("Student",studentSchema)

export default Student