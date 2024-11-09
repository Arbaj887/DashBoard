const express = require("express")
const mongodb = require('mongoose')
const app = express();
const cors = require('cors')
const router_Json = require('./routes/jsondata')
require('dotenv').config()


app.use(cors({
    origin: process.env.CORS,
    credentials:true
  }));
  
  app.use(express.urlencoded({extended:true}))
  app.use(express.json())
  
  app.use(router_Json)


mongodb.connect(process.env.Url)




app.listen(process.env.PORT || 5000,()=>{
    console.log("server run on port ",process.env.PORT)
})