import dotenv from'dotenv';
import express from 'express';
import cors  from  'cors';
import http from 'http';
import authroutes from './Routes/auth_routes.js'
import db from './config/db.js'


dotenv.config()
const port = process.env.port;

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

app.use('/auth',authroutes);

server.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})
