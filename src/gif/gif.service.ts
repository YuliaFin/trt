import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GifService {
  private readonly apiKey = 'uDFmYr9EbIDi727aj7ahIBBXpvWFsF0W'; // Здесь укажите свой API ключ Giphy

  async getRandomRichGif(): Promise<string> {
    try {
      const response = await axios.get('https://api.giphy.com/v1/gifs/random', {
        params: {
          api_key: this.apiKey,
          tag: 'rich',
        },
      });
      return response.data.data.images.original.url;
    } catch (error) {
      throw error;
    }
  }

  async getRandomBrokeGif(): Promise<string> {
    try {
      const response = await axios.get('https://api.giphy.com/v1/gifs/random', {
        params: {
          api_key: this.apiKey,
          tag: 'broke',
        },
      });
      return response.data.data.images.original.url;
    } catch (error) {
      throw error;
    }
  }
}
