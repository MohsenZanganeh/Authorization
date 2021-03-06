'use strict';
module.exports = (sequelize, DataTypes) => {
    const Permission = sequelize.define('Permission', {
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
        routes: {
            type: DataTypes.STRING,
            allowNull: false
        },
        group: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isGeneric: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        isPublic: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
        //
    }, {
        version: true,
        paranoid: true
    });
    return Permission;
}