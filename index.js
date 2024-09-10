require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/',(req,res)=>{
    res.send('<h1>This is home page</h1>')
})

app.get('/home',(req,res)=>{
    res.send("Hello Anurag")
})

app.get('/about',(req,res)=>{
    res.send("About Anurag")
})

app.listen(process.env.PORT,()=>{
    console.log(`Sever is running at port ${port}`);
})

