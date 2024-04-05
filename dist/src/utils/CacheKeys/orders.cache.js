"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderById = exports.ordersByUserCacheKey = void 0;
const PREFIX = "orders";
function ordersByUserCacheKey(user_id) {
    return PREFIX + "_" + user_id;
}
exports.ordersByUserCacheKey = ordersByUserCacheKey;
function orderById(order_id) {
    return PREFIX + "_" + order_id;
}
exports.orderById = orderById;
//# sourceMappingURL=orders.cache.js.map