const { NotFound, Forbidden } = require("http-errors");
const {findAll} = require("../../database/repository/RoleRepository");

class getRoleUseCase {
  constructor() {}
  async execute(req, res) {
    const role =await findAll({ id: req.user.id }, true);
    // req.ability.throwUnlessCan("create", user);

    return role;
  }
}

module.exports = new getRoleUseCase();
