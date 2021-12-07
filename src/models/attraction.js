const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Attraction extends Model {
    static associate() { }
  }

  Attraction.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM('CULTURE & ART', 'SHOPPING', 'NATURE', 'CULINARY', 'HISTORY & HERITAGE'),
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Attraction',
    tableName: 'Attraction',
  });
  return Attraction;
};
