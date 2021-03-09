"use strict";
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    "role",
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "id",
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      version: true,
      paranoid: true,
    }
  );
  return Role;
};
