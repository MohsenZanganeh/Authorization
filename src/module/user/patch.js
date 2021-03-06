const { editUseCase } = require("../../services/userUseCase");

async function update(req, res) {
  const user = await editUseCase(req, res);
  res.status(201).send(user);
}

module.exports = update;
