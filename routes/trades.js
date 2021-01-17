const express = require('express');
const router = express.Router();
const TradeController = require('../controllers/trades');

const tradeController = new TradeController();

router.post('/', tradeController.create.bind(tradeController));
router.get('/', tradeController.findAll.bind(tradeController));
router.get('/:id', tradeController.findById.bind(tradeController));

router.delete('/:id', tradeController.methodNotAllowed.bind(tradeController));
router.put('/:id', tradeController.methodNotAllowed.bind(tradeController));
router.patch('/:id', tradeController.methodNotAllowed.bind(tradeController));

module.exports = router;
