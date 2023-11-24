"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class ExchangeRateController {
    static async getGiphy(from, to) {
        return await axios_1.default.get('http://localhost:3000/api/currency/getRates', {
            params: { from, to },
        });
    }
}
exports.default = ExchangeRateController;
//# sourceMappingURL=exchangeRateController.js.map