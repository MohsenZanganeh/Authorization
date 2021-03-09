const {findOne} = require("../../database/repository/PermissionRepository");

class GetPermissionUseCase {
  constructor() {}
  async execute(req, res) {
    const permission = findOne(req.params,true);
    // req.ability.throwUnlessCan("create", user);

    return permission;
  }
}

module.exports = new GetPermissionUseCase();
