const express = require('express');
const router = express.Router();
const TradeController = require('../controllers/trades');

const tradeController = new TradeController();

router.post('/', tradeController.create.bind(tradeController));

module.exports = router;
