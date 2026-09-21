const Router = require('express');
const router = new Router();
const productController = require('../controllers/productController');
const { check } = require('express-validator'); 

router.get('/', productController.getAll);

router.post('/', [
    check('name', 'Назва товару не може бути порожньою').notEmpty(),
    check('price', 'Ціна повинна бути числом').isNumeric()
], productController.create);

module.exports = router;