const express = require('express')
const router = express.Router()
const fs = require('fs')

let user_data = JSON.parse(fs.readFileSync('./dev-data/user.json',"utf-8"))
let home_template = fs.readFileSync("./views/home.html",'utf-8')
router.get("/",(req,res)=>{
    res.end(home_template)
})

router.get("/api/user",(req,res)=>{
    res.send(user_data)
})

// * filter the data
router.get("/api/user/:id",(req,res)=>{
    const ID =Number( req.params.id)
    const filter_data = user_data.filter(el => el.id === ID)
    
    if(ID > user_data.length){
        res.status(404).json({
            "status":"404",
            "message":"invaid id"
        })
    }
    
    res.status(200).json({
        "status":"success",
        "data":{
            filter_data
        }
    })
})




module.exports = router