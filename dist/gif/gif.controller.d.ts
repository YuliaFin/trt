import { GifService } from './gif.service';
export declare class GifController {
    private readonly gifService;
    constructor(gifService: GifService);
    getRandomRichGif(): Promise<{
        url: string;
    }>;
    getRandomBrokeGif(): Promise<{
        url: string;
    }>;
}
