module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('Owns', {
    date: {
      type: DataTypes.STRING(10)
    },
  });

  return model
}