"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserValidationPipe = void 0;
const common_1 = require("@nestjs/common");
let CreateUserValidationPipe = class CreateUserValidationPipe {
    transform(data, metadata) {
        for (const key in data) {
            if (!data[key]) {
                throw new common_1.HttpException(`${key} is required!`, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
            }
        }
        return data;
    }
};
exports.CreateUserValidationPipe = CreateUserValidationPipe;
exports.CreateUserValidationPipe = CreateUserValidationPipe = __decorate([
    (0, common_1.Injectable)()
], CreateUserValidationPipe);
//# sourceMappingURL=create-user-validation.pipe.js.map