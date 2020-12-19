module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('News', {
    name: {
      type: DataTypes.STRING(255)
    },
    url: {
      type: DataTypes.STRING(255)
    }
  }, {
    tableName: 'news',
    timestamps: false
  });

  model.associate = models => {
    model.belongsToMany(models.News, { through: models.Owns});
  }

  return model
}