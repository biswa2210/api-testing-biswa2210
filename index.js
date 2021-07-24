const express=require('express');
const app = express();
require('dotenv/config');
bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const api=process.env.API_URL;
const cors = require('cors');
const data=require('./data.json')
app.use(cors());
app.options('*',cors());
//Middlewears
app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use('/public/uploads',express.static(__dirname+'/public/uploads'))
const port = process.env.PORT || 5000;

//Routers
const productRouter=require('./routers/products');
const userRouter=require('./routers/users');
const orderRouter=require('./routers/orders');
const categoriesRouter=require('./routers/categories');
app.use(`${api}/products`,productRouter);
app.use(`${api}/users`,userRouter);
app.use(`${api}/orders`,orderRouter);
app.use(`${api}/categories`,categoriesRouter);
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }
//Database Connections---------------------------------------->
mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    dbName : 'daily-deals_database'
})
.then(()=>{
    console.log("Your Database Connection Is Ready");
}).catch((err)=>{
    console.log(err);
})
//------------------------------------------------------------>

app.listen(port,()=>{
    console.log("The Testing App is listening on the port of : "+port);
})
