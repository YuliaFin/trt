import { Module } from '@nestjs/common';
import { GifController } from './gif.controller';
import { GifService } from './gif.service';

@Module({
  controllers: [GifController], // Импортируем контроллер
  providers: [GifService], // Импортируем сервис
})
export class GifModule {}
