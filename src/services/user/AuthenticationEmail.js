const { NotFound, Forbidden } = require("http-errors");
const {findById} = require("../../database/repository/UserRepository");

class AuthenticateEmailUseCase {
  constructor() {}
  async execute(req, res) {

    const user = findById(req.params);
    // req.ability.throwUnlessCan("create", user);

    return user;
  }
}

module.exports = new AuthenticateEmailUseCase();
