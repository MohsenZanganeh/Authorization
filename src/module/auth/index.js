const passport = require("./jwt");
const express = require("express");
const createAbilities = require('./abilities')
const route = express();
  route.use(passport.initialize());
  route.use(passport.authenticate("jwt", { session: false }), createAbilities);

  module.exports = route