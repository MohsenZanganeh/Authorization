const updateUserUseCase = require("../../services/user/updateUserUseCase");

async function patch(req, res) {
  const token = await updateUserUseCase.execute(req, res);
  res.status(200).send(token);
}

module.exports = patch;
