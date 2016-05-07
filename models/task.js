'use strict';
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    dueDate: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Task.belongsTo(models.User);
      }
    }
  });
  return Task;
};