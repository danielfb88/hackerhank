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

    async findAll() {
        try {
            const listTrade = await Trades.findAll(
                {
                    order: [
                        ['id', 'DESC']
                    ]
                }
            );

            return listTrade;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = TradeService;