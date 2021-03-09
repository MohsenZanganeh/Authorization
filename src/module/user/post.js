const registerUserUseCase = require("../../services/user/registerUserUseCase");

async function post(req, res) {
  const user = await registerUserUseCase.execute(req, res);

  res.status(201).send(user);
}

module.exports = post;
