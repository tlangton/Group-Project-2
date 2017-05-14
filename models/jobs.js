module.exports = function(sequelize, DataTypes) {
    const Jobs = sequelize.define("Jobs", {
        company_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        location: DataTypes.STRING,
        position: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone: {
            type: DataTypes.INTEGER,
            max: 11,
            isAlphanumeric: false
        },
        email: {
            type: DataTypes.STRING,
            isEmail: false,
        },
        job_description: DataTypes.STRING,
        job_number: DataTypes.STRING,
        // additionalInfo: DataTypes.STRING,
        application_status: DataTypes.STRING
    });
    return Jobs;
};

// There may be more things to do