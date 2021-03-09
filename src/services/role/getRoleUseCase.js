const { NotFound, Forbidden } = require("http-errors");
const {findOne} = require("../../database/repository/RoleRepository");

class getRoleUseCase {
  constructor() {}
  async execute(req, res) {
    const role = findOne(req.params);
    // req.ability.throwUnlessCan("create", user);

    return role;
  }
}

module.exports = new getRoleUseCase();
