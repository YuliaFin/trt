// currency.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CurrencyService {
  private readonly apiKey = '17bdd6eccfa44586a9ef23c296e5b0de'; // Здесь укажите свой API ключ Open Exchange Rates

  async getCurrencyExchangeRate(
    baseCurrency: string,
    targetCurrency: string,
  ): Promise<number> {
    try {
      const response = await axios.get(
        'https://open.er-api.com/v6/latest/' + baseCurrency + '/' + this.apiKey,
      );
      const exchangeRates = response.data.rates;
      const rate = exchangeRates[targetCurrency];
      if (rate) {
        return rate;
      } else {
        throw new Error(`Exchange rate for ${targetCurrency} not found.`);
      }
    } catch (error) {
      throw error;
    }
  }
}
