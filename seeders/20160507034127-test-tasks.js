'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tasks', [{
      title: 'saca la basura',
      description: 'take out the trash',
      dueDate: "Saturday, May, 14",
      priority: 1,
      status: 'inprogress',
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 1
     },
     {
      title: 'liempa el techo',
      description: 'clean the roof',
      dueDate: "Saturday, May, 14",
      priority: 2,
      status: 'notstarted',
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 1
     },
     {
      title: 'lava las trastes',
      description: 'wash the dishes',
      dueDate: "Saturday, May, 14",
      priority: 5,
      status: 'completed',
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 1
     }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Tasks', [{
      title: 'saca la basura'
    },
    {
      title: 'limepa el techo'
    },
    {
      title: 'lava las trastes'
    }
    ], {});
  }
};