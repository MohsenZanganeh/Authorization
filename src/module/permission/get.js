const getPermissionUseCase = require('../../services/permission/getPermissionUseCase');



async function get(req, res) {
  const role = await getPermissionUseCase.execute(req, res);
  res.status(200).send(role);
}

module.exports = get;