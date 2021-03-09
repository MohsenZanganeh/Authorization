const express = require("express");
const userRoute = require('./src/module/user/route')
const routeRoute = require('./src/module/route/route')
const roleRoute = require('./src/module/role/route')
const permissionRoute = require('./src/module/permission/route')

const jwtServices = require('./src/module/auth/index')
const login  = require('./src/module/user/login'),
      create = require('./src/module/user/post')
const db=require("./src/database/model/index")
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 
const secret = '!_^secret.casl.authorization?!';
app.set('jwt.secret', secret);
app.set('jwt.issuer', 'CASL.Express');
app.set('jwt.audience', 'casl.io');



app.post("/users/login", login);
app.post("/users", create);



app.use(jwtServices)
app.use(userRoute)
app.use(routeRoute)
app.use(roleRoute)
app.use(permissionRoute)

db.sequelize.sync({}).then(() => {
    console.log("Connect To DataBase.....")
}).catch((ex) => {
    console.log(`Can Not Connect To DataBase ${ex.message}` )
})



app.listen(3030,()=>{
    console.log('*******************************connect To 3030**************************');
})


// const {findUseCase} = require('./src/services/userUseCase');

// findUseCase()