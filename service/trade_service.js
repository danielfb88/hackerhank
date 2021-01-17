const Trades = require('../models/trades');

class TradeService {
    async create(tradeObject) {
        try {
            const trade = await Trades.create(tradeObject);

            return trade;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = TradeService;