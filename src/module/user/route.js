const express = require("express");
const route = express();
const {patch,get} = require('./index')

route.get("/users/:id", get);
route.patch("/users/:id", patch);

module.exports = route;
