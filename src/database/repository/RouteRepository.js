const { route,permission } = require("../model/index");
class RouteRepository {
  constructor() {  }
  create = async (data) => {
    const Route = await route.create(data);
    return Route;
  };
  findOne = async (data, join = false) => {
    let criteria = {where:data}
    if (join) {
      criteria  = {...criteria,include: [{ model: permission }]}
    }
    const Route = await route.findOne(criteria);
    return Route;
  };
  findAll = async (data,join = false) => {
    let criteria = {where:data}
    if (join) {
      criteria  = {...criteria,include: [{ model: permission }]}
    }
    const Route = await route.findAll(criteria);
    return Route;
  };
}

module.exports = new RouteRepository();
