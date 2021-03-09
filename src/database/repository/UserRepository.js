const { user, role } = require("../model/index");
class UserRepository {
  constructor() {  }
  create = async (data) => {
    const User = await user.create(data);
    return User;
  };
  loginUser = async (data) => {
    const User = await user.findOne({ where: data });
    return User;
  };
  findById = async (data) => {
    const User = await user.findOne({
      where: data,
      include: [{ model: role }],
    });
    return User;
  };
  updateById = async (param, data) => {
    const User = await user.update(data, { where: param });
    return User;
  };
}

module.exports = new UserRepository();
