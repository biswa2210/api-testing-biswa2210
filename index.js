const express = require('express');
const app = express();
const data=require('./data.json');
let port=process.env.PORT || 3000;
const api=process.env.API_URL;
app.get('/',(req,res)=>{
    res.send("Hello World"+api)
})
app.get('/developers',(req,res)=>{
    res.send(data)
})
app.listen(port,()=>{
    console.log("The Testing App is listening on the port of : "+port);
})
