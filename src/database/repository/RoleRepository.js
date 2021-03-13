const { role, permission, user } = require("../model/index");
class RoleRepository {
  constructor() {}
  create = async (data) => {
    const Role = await role.create(data);

    return Role;
  };
  update = async (param, data) => {
    const Role = await role.update(param, data);

    return Role;
  };
  assignToUser = async (param, data) => {
    const Role = await role.findOne(data, { where: param });
    const User = await user.findOne({ where: { id: data.userId } });
    if (User && Role) {
      await User.addRole(Role);
      return Role;
    }
    return {};
  };
  findOne = async (data, join = false) => {
    let criteria = { where: data };
    if (join) {
      criteria = {
        include: [{ model: permission }, { model: user,where:data }],
      };
    }
    const Role = await role.findOne(criteria);
    return Role;
  };
  findAll = async (data, join = false) => {
    let criteria = { where: data };
    if (join) {
      criteria = { include: [{ model: permission }, { model: user,where:data }]};
    }
    console.log("--criteria:", JSON.stringify(criteria));
    const Role = await role.findAll(criteria);
    return Role;
  };
}

module.exports = new RoleRepository();
