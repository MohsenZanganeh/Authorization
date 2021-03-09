const getRouteUseCase = require('../../services/route/getRouteUseCase');



async function get(req, res) {
  const route = await getRouteUseCase.execute(req, res);
  res.status(200).send(route);
}

module.exports = get;