import axios from 'axios';

const API_KEY = '4310eb12fabd48c89ee86ab7d202ef07'; // Замени на свой API ключ от Open Exchange Rates

export class CurrencyService {
  async getExchangeRate(
    baseCurrency: string,
    targetCurrency: string,
  ): Promise<number> {
    try {
      const response = await axios.get(
        `https://openexchangerates.org/api/latest.json?app_id=${API_KEY}&base=${baseCurrency}`,
      );
      const rates = response.data.rates;
      const exchangeRate = rates[targetCurrency];
      return exchangeRate;
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
      throw error;
    }
  }
}
