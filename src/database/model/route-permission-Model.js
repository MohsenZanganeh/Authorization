'use strict';
module.exports = (sequelize, DataTypes) => {
    const routePermission = sequelize.define('routePermission', {
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
    return routePermission;
}