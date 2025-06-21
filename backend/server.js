import express from 'express'
import mongoose from 'mongoose';
const app = express();
// const cors from 'cors';
import bodyParser from 'body-parser';
import cors from 'cors'
const PORT = 3000;
import userRouter from './routes/User.js'

app.use(bodyParser.json());

app.use(cors({
    origin:true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials:true
}))

app.use('/api/user',userRouter)




mongoose.connect('mongodb+srv://ashishrajpoot004:ashish123@cluster0.xo69aqq.mongodb.net/ecommerce').then(()=>{
    console.log("MongoDB is connected")
}).catch((e)=>{
    console.log(e);
})


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})