// giphy.controller.ts
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
      const targetCurrency = 'CHF';
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);

      const todayExchangeRate = await this.currencyService.getExchangeRate(
        baseCurrency,
        targetCurrency,
        today,
      );
      const yesterdayExchangeRate = await this.currencyService.getExchangeRate(
        baseCurrency,
        targetCurrency,
        yesterday,
      );

      let tag: string;
      if (todayExchangeRate > yesterdayExchangeRate) {
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
