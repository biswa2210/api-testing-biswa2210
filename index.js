const express=require('express');
const expressJwt = require('express-jwt');
const app = express();
require('dotenv/config');
bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const api=process.env.API_URL;
const secret = process.env.secret;
const cors = require('cors');
const data=require('./data.json')
const authJwt=require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');
app.use(cors());
app.options('*',cors());
//Middlewears
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(expressJwt({
    secret,
    algorithms: ['HS256'],
    isRevoked: isRevoked
}).unless({
    path: [
        {url: /\/public\/uploads(.*)/ , methods: ['GET', 'OPTIONS'] },
        {url: /\/api\/v1\/products(.*)/ , methods: ['GET', 'OPTIONS'] },
        {url: /\/api\/v1\/categories(.*)/ , methods: ['GET', 'OPTIONS'] },
        {url: /\/api\/v1\/orders(.*)/,methods: ['GET', 'OPTIONS', 'POST']},
        `${api}/users/login`,
        `${api}/users/register`,
    ]
}))
async function isRevoked(req, payload, done) {
    if(!payload.isAdmin) {
        done(null, true)
    }

    done();
}

app.use('/public/uploads',express.static(__dirname+'/public/uploads'))
app.use(errorHandler);
let port=process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.send("Hello World"+api)
})
app.get('/developers',(req,res)=>{
    res.send(data)
})
//Routers
const productRouter=require('./routers/products');
const userRouter=require('./routers/users');
const orderRouter=require('./routers/orders');
const categoriesRouter=require('./routers/categories');
app.use(`${api}/products`,productRouter);
app.use(`${api}/users`,userRouter);
app.use(`${api}/orders`,orderRouter);
app.use(`${api}/categories`,categoriesRouter);
//Database Connections---------------------------------------->
mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
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
