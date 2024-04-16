const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Route = require('./routes/UserRoutes')



const app = express()
const port = 4000
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://annavarisudhakar:sudha93811@cluster0.bw6znrm.mongodb.net/Auth')
.then(()=>console.log("db connected"))
.catch((err)=>console.log(err))


app.use('/auth',Route)


app.listen(port, ()=>{
    console.log("server started");
})