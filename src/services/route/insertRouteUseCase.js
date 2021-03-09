const { NotFound, Forbidden } = require("http-errors");
const {create} = require("../../database/repository/RouteRepository");

class insertRouteUseCase {
  constructor() {}
  async execute(req, res) {
    const rout =await create(req.body);
    // req.ability.throwUnlessCan("create", user);
    return rout;
  }
}

module.exports = new insertRouteUseCase();
