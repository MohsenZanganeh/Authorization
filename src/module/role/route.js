const express = require("express");
const route = express();
const {post,get,patch} = require('./index')

route.get("/role/:id", get);
route.post("/role", post);
route.patch("/role/:id", patch);

module.exports = route;
