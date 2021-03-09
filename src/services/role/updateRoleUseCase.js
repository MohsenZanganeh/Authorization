const { NotFound, Forbidden } = require("http-errors");
const {update} = require("../../database/repository/RoleRepository");

class getRoleUseCase {
  constructor() {}
  async execute(req, res) {
    const role = update(req.params);
    // req.ability.throwUnlessCan("create", user);

    return role;
  }
}

module.exports = new getRoleUseCase();
