const express = require("express");
const mongoose = require("mongoose");
const { accessibleRecordsPlugin } = require("@casl/mongoose");
const userRoute = require('./src/module/user/route')
const jwtServices = require('./src/module/auth/index')
const login = require('./src/module/user/login')
const create = require('./src/module/user/post')
const app = express();

mongoose.plugin(accessibleRecordsPlugin);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 
const secret = '!_^secret.casl.authorization?!';
app.set('jwt.secret', secret);
app.set('jwt.issuer', 'CASL.Express');
app.set('jwt.audience', 'casl.io');
// app.use(errorHandler);
app.post("/users/login", login);
app.post("/users", create);
app.use(jwtServices)
app.use(userRoute)

mongoose.connect("mongodb://mongo-1:27017/blog");

app.listen(3030,()=>{
    console.log('*******************************connect To 3030**************************');
})
