const insertPermissionUseCase = require('../../services/permission/insertPermissionUseCase');



async function post(req, res) {
  const permission = await insertPermissionUseCase.execute(req, res);
  res.status(200).send(permission);
}

module.exports = post;