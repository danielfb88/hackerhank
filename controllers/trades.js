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

    async findAll(req, res, next) {
        try{
            const listTrade = await this.service.findAll(req.body);

            res.status('200').json(listTrade);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    async findById(req, res, next) {
        try{
            const trade = await this.service.findById(req.params.id);

            if(trade) {
                res.status('200').json(trade);
            } else {
                res.status('404').json(
                    {
                        "Error": "ID not found"
                    }
                );
            }
        } catch (err) {
            console.log(err);
            next(err);
        }
    }
}

module.exports = TradeController;
