const insertRoleUseCase = require('../../services/role/insertRoleUseCase');



async function post(req, res) {
  const role = await insertRoleUseCase.execute(req, res);
  res.status(200).send(role);
}

module.exports = post;