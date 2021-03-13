const roleRepository = require("../../database/repository/RoleRepository");
const permissionRepository = require("../../database/repository/PermissionRepository");
const cache = require("../../utils/cache");

module.exports = async function createAbilities(user) {
  const role = await roleRepository.findAll({ id: user.id }, true);
  if (user) {
    let query = {};
    role.forEach((element) => {
      element.dataValues.permissions.forEach((permission) => {
        query = { ...query, id: Number(permission.id) };
      });
    });
    const permissions = await permissionRepository.findAll(query, true);
    permissions.forEach((permission) => {
      permission.routes.forEach((route) => {
        cache.hset(`${route.path}-${route.method}`, user.id, 1);
      });
    });
  }
};
