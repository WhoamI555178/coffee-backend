const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Order = sequelize.define('Order', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    customerName: { type: DataTypes.STRING, allowNull: false },
    items: { type: DataTypes.JSON, allowNull: false }, 
    totalPrice: { type: DataTypes.FLOAT, allowNull: false },
    status: { 
        type: DataTypes.STRING, 
        defaultValue: "Нове" 
    }
});

module.exports = Order;