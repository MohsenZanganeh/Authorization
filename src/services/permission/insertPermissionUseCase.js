const { NotFound, Forbidden } = require("http-errors");
const {create} = require("../../database/repository/PermissionRepository");

class insertPermissionUseCase {
  constructor() {}
  async execute(req, res) {
    const permission =await create(req.body);
    // req.ability.throwUnlessCan("create", user);

    return permission;
  }
}

module.exports = new insertPermissionUseCase();
