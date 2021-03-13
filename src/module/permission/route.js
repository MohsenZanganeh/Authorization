const express = require("express");
const route = express();
const {post,get,addPermissionToRoleController} = require('./index')
const requireToken = require('../auth/requireToken')

route.get("/permission/:id",requireToken, get);
route.post("/permission",requireToken, post);
route.patch("/permission/:id/role",requireToken, addPermissionToRoleController);

module.exports = route;
