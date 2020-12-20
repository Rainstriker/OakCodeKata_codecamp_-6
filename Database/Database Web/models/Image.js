module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('Image', {
    name: {
      type: DataTypes.STRING(255)
    },
    url: {
      type: DataTypes.STRING(255)
    }
  }, {
    tableName: 'images',
    timestamps: false
  });

  model.associate = models => {
    model.belongsToMany(models.News, { through: models.Owns});
  }

  return model
}