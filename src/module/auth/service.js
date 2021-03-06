const jwt = require('jsonwebtoken');

async function createToken(user,req) {


  const accessToken = jwt.sign({ user }, req.app.get('jwt.secret'), {
    issuer: req.app.get('jwt.issuer'),
    audience: req.app.get('jwt.audience')
  });

  return { accessToken };
}

module.exports = { createToken };
