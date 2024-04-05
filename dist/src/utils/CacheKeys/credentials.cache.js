"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserCredentialsCacheKey = void 0;
const PREFIX = "credentials";
function getUserCredentialsCacheKey(user_id) {
    return PREFIX + "_" + user_id;
}
exports.getUserCredentialsCacheKey = getUserCredentialsCacheKey;
//# sourceMappingURL=credentials.cache.js.map