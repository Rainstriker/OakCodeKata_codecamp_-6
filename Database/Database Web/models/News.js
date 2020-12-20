module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('News', {
    name: {
      type: DataTypes.STRING(255)
    },
    data: {
      type: DataTypes.STRING(255)
    }
  }, {
    tableName: 'news',
    timestamps: false
  });

  model.associate = models => {
    model.belongsTo(models.Category, { foreignKey: 'category_id'});
    model.belongsToMany(models.Image, { through: models.Owns});
  }

  return model
}