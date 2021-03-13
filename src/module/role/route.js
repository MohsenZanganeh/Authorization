const express = require("express");
const route = express();
const {post,get,addRoleToUserController} = require('./index')
const requireToken = require('../auth/requireToken')

route.get("/role/:id",requireToken, get);
route.post("/role",requireToken, post);
route.patch("/role/:id/user",requireToken, addRoleToUserController);

module.exports = route;
