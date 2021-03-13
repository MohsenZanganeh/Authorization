const jwt = require("jsonwebtoken");
const createAbilities = require("./abilities");

async function createToken(req,res,user) {
   await createAbilities(user);
  const accessToken = jwt.sign({ user }, req.app.get("jwt.secret"), {
    issuer: req.app.get("jwt.issuer"),
    audience: req.app.get("jwt.audience"),
  });

  return { accessToken };
}

module.exports = { createToken };
