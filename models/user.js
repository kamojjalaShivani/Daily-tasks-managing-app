module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    User.associate = function(models) {
      User.hasMany(models.Task, {
        foreignKey: 'UserId',
        as: 'tasks',
      });
    };
  
    return User;
  };
  