const express = require("express")
const http = require("http")
const app = express()

app.get('/',(req,res)=>{
    res.send("hello world rakam randi ")
})

const port = process.env.PORT || 3000
const server = http.createServer(app)
server.listen("3000",()=>{
    console.log(`server started at port ${port}`)
})
