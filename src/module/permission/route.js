const express = require("express");
const route = express();
const {post,get} = require('./index')

route.get("/permission/:id", get);
route.post("/permission", post);

module.exports = route;
