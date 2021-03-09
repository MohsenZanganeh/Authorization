'use strict';
module.exports = (sequelize, DataTypes) => {
  const Route = sequelize.define('route', {
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
      type: DataTypes.ENUM("get", "post", "delete", "patch", "put"),
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


  return Route;
}