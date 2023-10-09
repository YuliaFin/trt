import { Test, TestingModule } from '@nestjs/testing';
import { GifService } from './gif.service';

describe('GifService', () => {
  let service: GifService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GifService],
    }).compile();

    service = module.get<GifService>(GifService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get a random rich GIF', async () => {
    const gifUrl = await service.getRandomRichGif();
    expect(gifUrl).toBeDefined();
  });

  it('should get a random broke GIF', async () => {
    const gifUrl = await service.getRandomBrokeGif();
    expect(gifUrl).toBeDefined();
  });
});
