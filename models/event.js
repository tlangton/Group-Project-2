'use strict';
module.exports = function(sequelize, DataTypes) {
  var Events = sequelize.define('Events', {
    event: DataTypes.STRING,
    jobKey: DataTypes.INTEGER,
    type: DataTypes.STRING,
    date: DataTypes.DATE,
    notes: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Events.belongsTo(models.Job, {
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  })
  return Events;
}
