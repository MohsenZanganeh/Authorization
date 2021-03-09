const { NotFound, Forbidden } = require("http-errors");
const {create} = require("../../database/repository/UserRepository");

class registerUseCase {
  constructor() {}
  async execute(req, res) {
    console.log('--req.body.user:',req.body.user);
    const user =await create(req.body.user);
    // req.ability.throwUnlessCan("create", user);

    return user;
  }
}

module.exports = new registerUseCase();
