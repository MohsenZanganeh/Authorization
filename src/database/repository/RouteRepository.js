
const Route = require('../model/routModel')();
const seed = require('../../../seed/routes.json')
const createRoute =async ()=>{
    console.log('--seed:',seed);
  await  Route.insertMany(seed)
}


module.exports = {
    createRoute
}