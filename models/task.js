module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    });
  
    Task.associate = function(models) {
      Task.belongsTo(models.User, {
        foreignKey: 'UserId',
        as: 'user',
      });
    };
  
    return Task;
  };
  