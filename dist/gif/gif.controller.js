"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GifController = void 0;
const common_1 = require("@nestjs/common");
const gif_service_1 = require("./gif.service");
let GifController = class GifController {
    constructor(gifService) {
        this.gifService = gifService;
    }
    async getRandomRichGif() {
        const gifUrl = await this.gifService.getRandomRichGif();
        return { url: gifUrl };
    }
    async getRandomBrokeGif() {
        const gifUrl = await this.gifService.getRandomBrokeGif();
        return { url: gifUrl };
    }
};
exports.GifController = GifController;
__decorate([
    (0, common_1.Get)('random-rich'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GifController.prototype, "getRandomRichGif", null);
__decorate([
    (0, common_1.Get)('random-broke'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GifController.prototype, "getRandomBrokeGif", null);
exports.GifController = GifController = __decorate([
    (0, common_1.Controller)('/api/gifs'),
    __metadata("design:paramtypes", [gif_service_1.GifService])
], GifController);
//# sourceMappingURL=gif.controller.js.map