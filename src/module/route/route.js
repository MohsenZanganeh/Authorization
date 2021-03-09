const express = require("express");
const route = express();
const {post,get} = require('./index')

route.get("/route/:id", get);
route.post("/route", post);

module.exports = route;
