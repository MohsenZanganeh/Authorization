const express = require("express");
const route = express();
const {patch,get} = require('./index')
const requireToken = require('../auth/requireToken')

route.get("/users/:id",requireToken, get);
route.patch("/users/:id",requireToken, patch);

module.exports = route;
