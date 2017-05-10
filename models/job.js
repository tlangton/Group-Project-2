"use strict";
module.exports = function(sequelize, DataTypes) {
  var Job = sequelize.define(
    "Job",
    {
      company_name: DataTypes.STRING,
      postion: DataTypes.STRING,
      location: DataTypes.STRING,
      email: DataTypes.STRING,
      job_description: DataTypes.STRING,
      job_number: DataTypes.STRING,
      miscellaneous: DataTypes.STRING,
      application_status: DataTypes.STRING
    },
    {
      timestamps: false,
      classMethods: {
        associate: function(models) {
          Job.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }
  );
  return Job;
};
