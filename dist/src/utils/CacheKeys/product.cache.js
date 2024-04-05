"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productCacheOfBothCurrencies = exports.findOrderProductsCacheKey = exports.retrieveProductCacheKey = exports.findAllProductsCacheKey = void 0;
const PREFIX = 'products';
function findAllProductsCacheKey(game, type, currency) {
    let CACHE_KEY = PREFIX;
    const args = [game, type, currency];
    for (const arg of args) {
        CACHE_KEY += '_' + arg.toLowerCase();
    }
    return CACHE_KEY;
}
exports.findAllProductsCacheKey = findAllProductsCacheKey;
function retrieveProductCacheKey(product_id) {
    return PREFIX + '_' + product_id;
}
exports.retrieveProductCacheKey = retrieveProductCacheKey;
function findOrderProductsCacheKey(order_id) {
    return PREFIX + '_' + order_id;
}
exports.findOrderProductsCacheKey = findOrderProductsCacheKey;
function productCacheOfBothCurrencies(game, type) {
    const key = PREFIX + "_" + game.toLowerCase() + "_" + type.toLowerCase();
    const currencies = ["usd", "brl"];
    const cacheKeys = currencies.map((currecy) => key + "_" + currecy);
    return cacheKeys;
}
exports.productCacheOfBothCurrencies = productCacheOfBothCurrencies;
//# sourceMappingURL=product.cache.js.map