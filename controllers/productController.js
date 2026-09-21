const Product = require('../models/Product');
const { validationResult } = require('express-validator'); 

class ProductController {
    async getAll(req, res) {
        const products = await Product.findAll();
        return res.json(products);
    }

    async create(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { name, description, price, imageUrl } = req.body;
            const product = await Product.create({ name, description, price, imageUrl });
            return res.status(201).json(product);
        } catch (error) {
            return res.status(500).json({ message: "Помилка при створенні товару" });
        }
    }
}

module.exports = new ProductController();