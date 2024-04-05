"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.servicesCacheKey = void 0;
const PREFIX = "services";
function servicesCacheKey(order_id) {
    return PREFIX + "_" + order_id;
}
exports.servicesCacheKey = servicesCacheKey;
//# sourceMappingURL=services.cache.js.map