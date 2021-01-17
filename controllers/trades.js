const TradeService = require('../service/trade_service');
class TradeController {
    constructor() {
        this.service = new TradeService();
    }

    async create(req, res, next) {
        try{
            const createdTrade = await this.service.create(req.body);

            res.status('201').json(createdTrade);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }
}

module.exports = TradeController;
