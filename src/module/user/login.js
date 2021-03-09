const loginUserUseCase = require("../../services/user/loginUserUseCase");

async function login(req, res) {
  const token = await loginUserUseCase.execute(req, res);
  res.status(200).send(token);
}

module.exports = login;
