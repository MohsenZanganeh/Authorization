const { NotFound, Forbidden } = require("http-errors");
const {create} = require("../../database/repository/RoleRepository");

class insertRoleUseCase {
  constructor() {}
  async execute(req, res) {
    console.log('--req.body:',req.body);
    const role =await create(req.body);
    // req.ability.throwUnlessCan("create", user);

    return role;
  }
}

module.exports = new insertRoleUseCase();
