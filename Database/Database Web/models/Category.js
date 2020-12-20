module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING(255)
    },
  }, {
    tableName: 'categories',
    timestamps: false
  });

  model.associate = models => {
    model.hasMany(models.News, { foreignKey: 'category_id'});
  }

  return model
}