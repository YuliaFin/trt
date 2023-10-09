"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let CurrencyService = class CurrencyService {
    constructor() {
        this.apiKey = 'd8abd4451f984415bf558552a779501c';
    }
    async getCurrencyExchangeRate(baseCurrency, targetCurrency) {
        try {
            const response = await axios_1.default.get('https://open.er-api.com/v6/latest/' + baseCurrency + '/' + this.apiKey);
            const exchangeRates = response.data.rates;
            const rate = exchangeRates[targetCurrency];
            if (rate) {
                return rate;
            }
            else {
                throw new Error(`Exchange rate for ${targetCurrency} not found.`);
            }
        }
        catch (error) {
            throw error;
        }
    }
};
exports.CurrencyService = CurrencyService;
exports.CurrencyService = CurrencyService = __decorate([
    (0, common_1.Injectable)()
], CurrencyService);
//# sourceMappingURL=currency.service.js.map