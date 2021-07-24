const express=require('express');
const app = express();
require('dotenv/config');
const api=process.env.API_URL;
const data=require('./data.json')

let port=process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.send("Hello World"+api)
})
app.get('/developers',(req,res)=>{
    res.send(data)
})


app.listen(port,()=>{
    console.log("The Testing App is listening on the port of : "+port);
})
