const { NotFound, Forbidden } = require("http-errors");
const {updateById} = require("../../database/repository/UserRepository");

class registerUseCase {
  constructor() {}
  async execute(req, res) {
    const user = updateById(req.params,req.body.user);
    // req.ability.throwUnlessCan("create", user);

    return user;
  }
}

module.exports = new registerUseCase();
