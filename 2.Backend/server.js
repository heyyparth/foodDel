import express from "express";
import cors from "cors";
import 'dotenv/config'
import connectDB from "./db/index.js";
import router from "./routes/food.route.js";
import userRouter from "./routes/user.routes.js";


const app = express()
// const port = 4000



app.use(express.json());
app.use(cors());

//DB connection
connectDB();

//Router declaration
app.use("/api/food" ,router )
app.use("/api/user" ,userRouter )

//mount upload folder images on website to be used by frontend
app.use("/images" , express.static('uploads'))
app.get("/" , (req , res)=>{
    res.send("Server Working");
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server started on port ${process.env.PORT}`)
})