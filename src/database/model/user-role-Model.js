'use strict';
module.exports = (sequelize, DataTypes) => {
    const userRole = sequelize.define('userRole', {
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
    return userRole;
}