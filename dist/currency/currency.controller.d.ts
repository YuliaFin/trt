import { CurrencyService } from './currency.service';
export declare class CurrencyController {
    private readonly currencyService;
    constructor(currencyService: CurrencyService);
    getCurrencyExchangeRate(baseCurrency: string, targetCurrency: string): Promise<{
        exchangeRate: number;
    }>;
}
