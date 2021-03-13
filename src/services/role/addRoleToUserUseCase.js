const { NotFound, Forbidden } = require("http-errors");
const {assignToUser} = require("../../database/repository/RoleRepository");

class addRoleToUserUseCase {
  constructor() {}
  async execute(req, res) {
    const role = assignToUser(req.params,req.body);
    // req.ability.throwUnlessCan("create", user);

    return role;
  }
}

module.exports = new addRoleToUserUseCase();
