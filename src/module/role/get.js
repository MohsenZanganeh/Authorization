const getRoleUseCase = require('../../services/role/getRoleUseCase');



async function get(req, res) {
  const permission = await getRoleUseCase.execute(req, res);
  res.status(200).send(permission);
}

module.exports = get;