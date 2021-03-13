const { permission,route, role } = require("../model/index");
class PermissionRepository {
  constructor() {}
  create = async (data) => {
    const Permission = await permission.create(data);
    const Route = await route.findOne({ where: { id: data.routeId } });
    if (Route) {
      await Route.addPermission(Permission);
    }
    return Permission;
  };

  assignPermission = async (param, data) => {
    const Permission = await permission.findOne({ where: { id: param.id } });
    const Role = await role.findOne(data, { where: data.roleId });

    if (Permission && Role) {
      await Role.addPermission(Permission);
      return Role;
    }
    return {}
  };
  findOne = async (data, join = false) => {
    let criteria = {where:data}
    if (join) {
      criteria  = {...criteria,include: [{ model: route }]}
    }
    const Permission = await permission.findOne(criteria);
    return Permission;
  };
  findAll = async (data,join = false) => {
    let criteria = {where:data}
    if (join) {
      criteria  = {...criteria,include: [{ model: route }]}
    }
    const Permission = await permission.findAll(criteria);
    return Permission;
  };
}
module.exports = new PermissionRepository();
