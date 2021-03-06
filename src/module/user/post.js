const {createUseCase} = require('../../services/userUseCase');


async function post(req, res) {
   const user = await createUseCase(req,res)

  res.status(201).send(user);
}

module.exports =post;
