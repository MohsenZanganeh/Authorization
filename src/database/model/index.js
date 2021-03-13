"use strict";
const Sequelize = require("sequelize");

const env = "development";
const config = require(__dirname + "/../../../config/config.json")[env];
if (config) {
  const sequelize = new Sequelize(config);

  const UserModel = require("./user-Model");
  const RoleModel = require("./role-Model");
  const PermissionModel = require("./permission-Model");
  const RouteModel = require("./route-Model");
  const user = UserModel(sequelize, Sequelize);
  const role = RoleModel(sequelize, Sequelize);
  const permission = PermissionModel(sequelize, Sequelize);
  const route = RouteModel(sequelize, Sequelize);

  user.belongsToMany(role, {
    through: "userRole",
  });
  role.belongsToMany(user, {
    through: "userRole",
  });

  role.belongsToMany(permission, {
    through: "rolePermission",
  });
  permission.belongsToMany(role, {
    through: "rolePermission",
  });

  permission.belongsToMany(route, {
    through: "routePermission",
  });
  route.belongsToMany(permission, {
    through: "routePermission",
  });

  module.exports = {
    sequelize,
    Sequelize,
    user,
    role,
    permission,
    route,
  };
}
