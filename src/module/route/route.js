const express = require("express");
const route = express();
const {post,get} = require('./index')
const requireToken = require('../auth/requireToken')

route.get("/route/:id",requireToken, get);
route.post("/route",requireToken, post);

module.exports = route;
