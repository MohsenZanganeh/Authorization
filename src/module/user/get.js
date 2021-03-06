const {findUseCase} = require('../../services/userUseCase');


async function get(req, res) {
 
  const user = await findUseCase(req,res);

  res.status(201).send(user);
}

module.exports = get
