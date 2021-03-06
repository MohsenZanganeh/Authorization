const {postUseCase} = require('../../services/postUseCase');


async function create(req, res) {
  postUseCase(req,res)
  const user = new User(req.body.user);

  req.ability.throwUnlessCan('create', user);
  await user.save();

  res.status(201).send({ user });
}

module.exports = {
  create,
};
