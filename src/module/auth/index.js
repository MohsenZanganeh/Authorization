const passport = require("./jwt");
const express = require("express");
const route = express();
  route.use(passport.initialize());
  route.use(passport.authenticate("jwt", { session: false }));

  module.exports = route