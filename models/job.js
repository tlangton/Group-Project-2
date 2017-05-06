
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Job = sequelize.define('Job', {
    company: DataTypes.STRING,
    location: DataTypes.STRING,
    emailAddress: DataTypes.STRING,
    description: DataTypes.STRING,
    jobReferenceNumber: DataTypes.STRING,
    miscellaneous: DataTypes.STRING,
    status: DataTypes.STRING,
    userKey: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Job.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return Job;
}
