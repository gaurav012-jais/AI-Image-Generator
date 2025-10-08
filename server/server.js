import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './Config/mongodb.js'
import userRouter from './Routers/userRouter.js';
import imageRouter from './Routers/imgaeroutes.js';

const PORT=process.env.PORT || 3000;
const app=express()

app.use(express.json()) //middleware
app.use(cors())
await connectDB()


app.use('/api/user',userRouter)
app.use('/api/image',imageRouter)
app.get('/',(req,res)=>res.send("API working"))

app.listen(PORT,()=>console.log("Server is running on port") + PORT)
