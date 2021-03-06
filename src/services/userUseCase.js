const { NotFound, Forbidden } = require("http-errors");
const User = require("../database/model/userModel");

const { createToken } = require("../module/auth/service");
async function findUseCase(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) {
    throw new NotFound("User is not found");
  }

  // req.ability.throwUnlessCan("read", user);
 return user
}

async function editUseCase(req, res) {
  const user =await User.updateOne({_id:req.params.id},req.body.user)
  // req.ability.throwUnlessCan("create", user);

  return {status:'success',message:'Update User Success'};
}


async function createUseCase(req, res) {
  const user = new User(req.body.user);
  // req.ability.throwUnlessCan("create", user);
  await user.save();

  return user;
}

async function loginUseCase(req, res) {
  const user =await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (user) {
    const token = createToken(user,req);
    return token;
  }
}
module.exports = {
  createUseCase,
  findUseCase,
  loginUseCase,
  editUseCase,
};
