const { NotFound, Forbidden } = require("http-errors");
const {assignPermission} = require("../../database/repository/PermissionRepository");

class addPermissionToRoleUseCase {
  constructor() {}
  async execute(req, res) {
    console.log('-a---------------------------------------------------');
    const role = assignPermission(req.params,req.body);
    // req.ability.throwUnlessCan("create", user);

    return role;
  }
}

module.exports = new addPermissionToRoleUseCase();
