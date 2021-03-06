'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    email: {
      type: DataTypes.STRING(36),
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      field: 'uuid'
    },
    password: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }, 
    permission: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
  }, {
    version: true,
    paranoid:true
  });
  User.associate = function (models) {
    //associate User And Role
    models.User.belongsTo(models.Role)
    //associate User And User_Password
    models.User.hasMany(models.User_Password)
    models.User_Password.belongsTo(models.User)
  };
  User.prototype.JsonUser=function(token=""){
   return({
    flname:this.flname,
    email:this.email,
    Token:token,
    uuid:this.uuid
   })
  }
   User.prototype.JsonUserWithCode=function(){
    return({
     flname:this.flname,
     email:this.email,
     activationCode:this.activationCode,
     uuid:this.uuid
    })
  }
  return User;
}