
const Route = require('../model/routModel')();
const createUser =async ()=>{
    console.log('--seed:',seed);
  await  Route.insertMany(seed)
}


module.exports = {
}