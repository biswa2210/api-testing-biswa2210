const express = require('express');
const app = express();
const data=require('./data.json');
let port=process.env.PORT || 3000;
app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.get('/developers',(req,res)=>{
    res.send(data)
})
app.listen(port,()=>{
    console.log("The Testing App is listening on the port of : "+port);
})
