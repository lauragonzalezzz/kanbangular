'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tasks', [{
      title: 'saca la basura',
      description: 'take out the trash',
      dueDate: 'Friday',
      priority: 1,
      status: 'inprogress',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      title: 'liempa el techo',
      description: 'clean the roof',
      dueDate: 'Sunday',
      priority: 2,
      status: 'notstarted',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      title: 'lava las trastes',
      description: 'wash the dishes',
      dueDate: 'Friday',
      priority: 5,
      status: 'completed',
      createdAt: new Date(),
      updatedAt: new Date()
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
