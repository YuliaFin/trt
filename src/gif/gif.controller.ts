import { Controller, Get } from '@nestjs/common';
import { GifService } from './gif.service';

@Controller('/api/gifs')
export class GifController {
  constructor(private readonly gifService: GifService) {}

  @Get('random-rich')
  async getRandomRichGif(): Promise<{ url: string }> {
    const gifUrl = await this.gifService.getRandomRichGif();
    return { url: gifUrl };
  }

  @Get('random-broke')
  async getRandomBrokeGif(): Promise<{ url: string }> {
    const gifUrl = await this.gifService.getRandomBrokeGif();
    return { url: gifUrl };
  }
}
