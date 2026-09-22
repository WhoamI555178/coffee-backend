const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { check } = require('express-validator');
const validateRequest = require('../middleware/validateRequest');

router.post('/', [
    check('customerName', 'Ім\'я клієнта обов\'язкове').notEmpty(),
    check('totalPrice', 'Ціна повинна бути числом').isNumeric(),
    validateRequest 
], orderController.create);

router.get('/:id/status', orderController.getStatus);

router.patch('/:id/status', [
    check('status', 'Статус обов\'язковий').notEmpty(),
    validateRequest
], orderController.updateStatus);

module.exports = router;