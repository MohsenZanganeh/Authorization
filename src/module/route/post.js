const insertRouteUseCase = require('../../services/route/insertRouteUseCase');



async function get(req, res) {
  const route = await insertRouteUseCase.execute(req, res);
  res.status(200).send(route);
}

module.exports = get;