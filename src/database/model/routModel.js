'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Route', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    group: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    path: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    method: {
      type: Sequelize.ENUM("get", "post", "delete", "patch", "put"),
      allowNull: false
    }, 
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    version: true,
    paranoid:true
  });
  Role.associate = function (models) {
    models.Role.hasMany(models.Permission)
    models.Permission.belongsTo(models.Role)
  };
  return Role;
}