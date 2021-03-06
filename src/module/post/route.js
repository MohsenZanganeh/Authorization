const express = require("express");
const route = express();
const {create,update,get} = require('./index')

route.get("/users/:id", get);
route.patch("/users/:id", update);
route.post("/users", create);

module.exports = route;
