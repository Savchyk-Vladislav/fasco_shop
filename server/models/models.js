const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define(`user`, {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Basket = sequelize.define(`basket`, {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketCloth = sequelize.define(`basket_cloth`, {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  size: { type: DataTypes.STRING, allowNull: false },
  count: { type: DataTypes.INTEGER, allowNull: false },
});

const Cloth = sequelize.define(`cloth`, {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
  price: { type: DataTypes.DOUBLE, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
});

const Brand = sequelize.define(`brand`, {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Type = sequelize.define(`type`, {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Rating = sequelize.define(`rating`, {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, defaultValue: 0 },
});

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketCloth);
BasketCloth.belongsTo(Basket);

BasketCloth.belongsTo(Cloth, { foreignKey: "clothId" });
Cloth.hasMany(BasketCloth, { foreignKey: "clothId" });

Cloth.hasMany(Rating);
Rating.belongsTo(Cloth);

Brand.hasMany(Cloth);
Cloth.belongsTo(Brand);

Type.hasMany(Cloth);
Cloth.belongsTo(Type);

module.exports = {
  User,
  Basket,
  BasketCloth,
  Cloth,
  Brand,
  Type,
  Rating,
};
