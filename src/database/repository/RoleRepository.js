const { role,permission,user } = require("../model/index");
class RoleRepository {
  constructor() {  }
  create = async (data) => {
    console.log('--data:',data);
    const Role = await role.create(data);
  
    return Role;
  }; 
  update = async (param,data) => {
    const Role = await role.update(param,data);
    const Permission = await permission.findOne({ where: { id: data.permissionId } });
    if (Permission) {
      await permission.addRole(Role);
    }
    return Role;
  };
  findOne = async (data, join = false) => {
    let criteria = {where:data}
    if (join) {
      criteria  = {...criteria,include: [{ model: permission }]}
    }
    const Role = await role.findOne(criteria);
    return Role;
  };
  findAll = async (data,join = false) => {
    let criteria = {where:data}
    if (join) {
      criteria  = {...criteria,include: [{ model: permission }]}
    }
    const Role = await role.findAll(criteria);
    return Role;
  };
}

module.exports = new RoleRepository();