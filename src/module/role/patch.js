const updateRoleUseCase = require('../../services/role/updateRoleUseCase');



async function post(req, res) {
  const role = await updateRoleUseCase.execute(req, res);
  res.status(200).send(role);
}

module.exports = post;