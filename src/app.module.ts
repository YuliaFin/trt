import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GifService } from './gif/gif.service';
import { GifModule } from './gif/gif.module'; // Импортируйте ваш модуль
import { CurrencyService } from './currency/currency.service';
import { CurrencyController } from './currency/currency.controller';
import { CurrencyModule } from './currency/currency.module';

@Module({
  imports: [GifModule, CurrencyModule],
  controllers: [AppController, CurrencyController],
  providers: [AppService, GifService, CurrencyService],
})
export class AppModule {}
