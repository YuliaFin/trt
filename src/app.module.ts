import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GiphyService } from './gif/gif.service';
import { GiphyModule } from './gif/gif.module'; // Импортируйте ваш модуль
import { CurrencyService } from './currency/currency.service';
import { CurrencyController } from './currency/currency.controller';
import { CurrencyModule } from './currency/currency.module';

@Module({
  imports: [GiphyModule, CurrencyModule],
  controllers: [AppController, CurrencyController],
  providers: [AppService, GiphyService, CurrencyService],
})
export class AppModule {}
