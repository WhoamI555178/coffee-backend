const Order = require('../models/Order');

class OrderController {
    async create(req, res, next) {
        try {
            const { customerName, items, totalPrice } = req.body;
            const order = await Order.create({ customerName, items, totalPrice });
            return res.status(201).json(order);
        } catch (error) {
            next(error); 
        }
    }

    async getStatus(req, res, next) {
        try {
            const { id } = req.params;
            const order = await Order.findByPk(id);
            if (!order) {
                return res.status(404).json({ message: "Замовлення не знайдено" });
            }
            return res.json({ id: order.id, status: order.status });
        } catch (error) {
            next(error);
        }
    }

    async updateStatus(req, res, next) {
        try {
            const { id } = req.params;
            const { status } = req.body;
            
            const order = await Order.findByPk(id);
            if (!order) {
                return res.status(404).json({ message: "Замовлення не знайдено" });
            }
            
            order.status = status;
            await order.save();
            
            return res.json({ message: "Статус успішно оновлено", order });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new OrderController();