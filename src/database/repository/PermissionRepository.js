const { permission, route } = require("../model/index");
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
