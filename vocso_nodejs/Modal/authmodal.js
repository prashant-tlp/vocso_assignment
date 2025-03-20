import mongoose from 'mongoose';
import mongooseSequence from 'mongoose-sequence' 
const autoinc = mongooseSequence(mongoose)
const adminSchema =new mongoose.Schema({
    user_id:{type:Number,unique:true},
    name:{type:String},
    email:{type:String,required:true},
    password:{type:String,required:true}
})

adminSchema.plugin(autoinc,{inc_field:'user_id'});

export const Admin = mongoose.model('Admin',adminSchema)
