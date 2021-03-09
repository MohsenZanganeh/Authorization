const getUserUseCase = require("../../services/user/getUserUseCase");

async function login(req, res) {
  const token = await getUserUseCase.execute(req, res);
  res.status(200).send(token);
}

module.exports = login;
