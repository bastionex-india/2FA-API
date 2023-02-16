const express=require('express');
const dotenv=require('dotenv')
const app=express();
const router=require('./routers/userRoute')
const cors=require('cors')
const cookieParser=require('cookie-parser')




dotenv.config()
require('./db/connection.js')


app.use(cookieParser())
app.use(express.json());
// app.use(bodyParser);
app.get('/',(req,res)=>{
    res.send(
        "hello"
    )
})


app.use(cors('*'))

app.use('/user',router)

const port=process.env.PORT


app.listen(port,()=>{
    console.log(`App is listening on ${port}`)
})