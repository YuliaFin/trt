// currency.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { CurrencyService } from './currency.service';

@Controller('/api/currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get('/:baseCurrency/:targetCurrency')
  async getCurrencyExchangeRate(
    @Param('baseCurrency') baseCurrency: string,
    @Param('targetCurrency') targetCurrency: string,
  ): Promise<{ exchangeRate: number }> {
    const exchangeRate = await this.currencyService.getCurrencyExchangeRate(
      baseCurrency,
      targetCurrency,
    );
    return { exchangeRate };
  }
}
