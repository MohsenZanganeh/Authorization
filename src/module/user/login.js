const {loginUseCase} = require('../../services/userUseCase');

async function login(req, res) {
  const token =await loginUseCase(req,res)
  res.status(200).send(token);
}

module.exports = login;
