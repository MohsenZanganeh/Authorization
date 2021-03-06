const permission = require("../model/permissionModel")();
const route = require("../model/routModel")();
const seed = require("../../../seed/routes.json");
const createPermission = async () => {
  const routes = await route.find({});
  const permissions = [];
  for (let index = 0; index < routes.length; index++) {
    const element = routes[index];
    permissions.push({
      routes: [element.id],
      title: element.title,
      group: element.group,
      isGeneric: false,
      isPublic: false,
    });
  }
  await permission.insertMany(permissions);
};

module.exports = {
  createPermission,
};
