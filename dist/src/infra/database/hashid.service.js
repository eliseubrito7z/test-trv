"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashId = void 0;
const common_1 = require("@nestjs/common");
const sqids_1 = __importDefault(require("sqids"));
const hashids_codes = {
    User: 1,
    Order: 2,
    Service: 3,
    Credential: 4,
    AdminAccess: 5,
    ProductTranslate: 6,
};
let HashId = class HashId {
    constructor() {
        this.alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.sqids = new sqids_1.default({
            alphabet: this.alphabet,
            minLength: 4
        });
    }
    decode(data) {
        const decoded = this.sqids.decode(data);
        return { id: decoded[1] };
    }
    encode(model, id) {
        const hash_code = hashids_codes[model];
        return this.sqids.encode([hash_code, id]);
    }
};
exports.HashId = HashId;
exports.HashId = HashId = __decorate([
    (0, common_1.Injectable)()
], HashId);
//# sourceMappingURL=hashid.service.js.map