const addRoleToUserUseCase = require('../../services/role/addRoleToUserUseCase');



async function addRoleToUserController(req, res) {
  const role = await addRoleToUserUseCase.execute(req, res);
  res.status(200).send(role);
}

module.exports = addRoleToUserController;