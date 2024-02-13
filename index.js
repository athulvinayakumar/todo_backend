require('dotenv').config()

// express
const express = require('express')

// cors
const cors = require('cors')

// router
const router = require('./Router/router')

// import connection.js
require('./DB/connections')

// server
const Tserver = express()

// use cors
Tserver.use(cors())

// middleware
Tserver.use(express.json())

Tserver.use(router)

// port
const PORT = 4000 || process.env

// to run server
Tserver.listen(PORT,()=>{
    console.log(`SERVER RUNNING SUCCESSFULLY AT PORT NUMBER ${PORT}`);
})

// to get request
Tserver.get('/',(req,res)=>{
    res.send(`<h1>Course server running successfully and ready to accept request from client</h1>`)
})
