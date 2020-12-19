module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('News', {
    date: {
      type: DataTypes.STRING(10)
    },
  }, {
    tableName: 'news',
    timestamps: false
  });

  model.associate = models => {
    
  }

  return model
}