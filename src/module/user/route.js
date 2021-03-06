const express = require("express");
const route = express();
const {update,get} = require('./index')

route.get("/users/:id", get);
route.patch("/users/:id", update);

module.exports = route;
