'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    userName: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Task);
      }
    }
  });
  return User;
};