import { Module } from '@nestjs/common';
import { GiphyController } from './gif.controller';
import { GiphyService } from './gif.service';
import { CurrencyService } from '../currency/currency.service';

@Module({
  controllers: [GiphyController],
  providers: [GiphyService, CurrencyService], // Убедитесь, что CurrencyService добавлен в providers
})
export class GiphyModule {}
