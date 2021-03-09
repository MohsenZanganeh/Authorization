'use strict';
module.exports = (sequelize, DataTypes) => {
    const rolePermission = sequelize.define('rolePermission', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        }
        //
    }, {
        version: true,
        paranoid: true,
        freezeTableName: true
    });
    return rolePermission;
}