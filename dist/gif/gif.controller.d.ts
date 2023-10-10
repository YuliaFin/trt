import { GiphyService } from './gif.service';
import { CurrencyService } from '../currency/currency.service';
export declare class GiphyController {
    private readonly giphyService;
    private readonly currencyService;
    constructor(giphyService: GiphyService, currencyService: CurrencyService);
    getRandomGif(): Promise<{
        url: string;
    }>;
}
