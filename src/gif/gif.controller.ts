import { Controller, Get } from '@nestjs/common';
import { GiphyService } from './gif.service';
import { CurrencyService } from '../currency/currency.service';

@Controller('giphy')
export class GiphyController {
  constructor(
    private readonly giphyService: GiphyService,
    private readonly currencyService: CurrencyService,
  ) {}

  @Get('random-gif')
  async getRandomGif(): Promise<{ url: string }> {
    try {
      const baseCurrency = 'USD';
      const targetCurrency = 'CHF'; // Замените YOUR_TARGET_CURRENCY на вашу целевую валюту
      const exchangeRate = await this.currencyService.getExchangeRate(
        baseCurrency,
        targetCurrency,
      );

      let tag: string;
      if (exchangeRate > 1) {
        tag = 'rich';
      } else {
        tag = 'broke';
      }

      const gifUrl = await this.giphyService.getRandomGifByTag(tag);
      return { url: gifUrl };
    } catch (error) {
      console.error('Error fetching random gif:', error);
    }
  }
}
