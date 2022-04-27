const express = require("express")
const app = express()
const user = require('./rout/user')

const PORT = 8000

app.use(user)

app.listen(PORT,(req,res)=>{
    console.log(`the server is running on http://127.0.0.1:${PORT}`)
})