import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const db = mongoose.connect(process.env.mongostring).
then((res)=>console.log('connected to database')).
catch((err)=>console.log('error occured while connecting to database',err));

export default db