const express = require('express');
const cors = require('cors');
const sequelize = require('./db');

const Product = require('./models/Product');
const User = require('./models/User');
const Order = require('./models/Order');

const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Підключення до бази даних (ORM) успішне!');
        
        await sequelize.sync({ alter: true }); 
        console.log('✅ База даних синхронізована (Схеми оновлено).');

        app.listen(5000, () => {
            console.log('🚀 Сервер запущено на порту 5000');
        });
    } catch (error) {
        console.error('❌ Помилка:', error);
    }
};

start();