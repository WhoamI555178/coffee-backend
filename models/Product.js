const { DataTypes } = require('sequelize');
const sequelize = require('../db'); 

const Product = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    price: { type: DataTypes.FLOAT, allowNull: false },
    imageUrl: { type: DataTypes.STRING }
});

module.exports = Product;