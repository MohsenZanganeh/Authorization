const { NotFound, Forbidden } = require("http-errors");
const {findOne} = require("../../database/repository/RouteRepository");

class GetRouteUseCase {
  constructor() {}
  async execute(req, res) {
    const rout = findOne(req.params,true);
    // req.ability.throwUnlessCan("create", user);
    return rout;
  }
}

module.exports = new GetRouteUseCase();
