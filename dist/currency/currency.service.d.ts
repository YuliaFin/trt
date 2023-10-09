export declare class CurrencyService {
    private readonly apiKey;
    getCurrencyExchangeRate(baseCurrency: string, targetCurrency: string): Promise<number>;
}
