const express = require("express")
const app = express()
const user = require('./rout/user')

app.use(user)

app.listen(8000,(req,res)=>{
    console.log("app is running")
})