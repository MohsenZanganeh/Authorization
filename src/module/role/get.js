const getPermissionUseCase = require('../../services/permission/getPermissionUseCase');



async function get(req, res) {
  const permission = await getPermissionUseCase.execute(req, res);
  res.status(200).send(permission);
}

module.exports = get;