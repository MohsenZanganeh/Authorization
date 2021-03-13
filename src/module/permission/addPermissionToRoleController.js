const addPermissionToRoleUseCase = require('../../services/permission/addPermissionToRoleUseCase');



async function addPermissionToRoleController(req, res) {
  const role = await addPermissionToRoleUseCase.execute(req, res);
  res.status(200).send(role);
}

module.exports = addPermissionToRoleController;