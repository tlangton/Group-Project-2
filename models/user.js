'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      user_name: DataTypes.STRING,
      password: DataTypes.STRING
    }, {
      classMethods: {
        associate: function(models) {
          User.hasMany(models.Job,{
            // associations can be defined here
            onDelete: "cascade"
          });
      }
    }
  });
return User;
};
