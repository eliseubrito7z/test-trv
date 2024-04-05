"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arrayChunk(arr, chunkSize) {
    const chunks = [];
    let i = 0;
    const n = arr.length;
    while (i < n) {
        chunks.push(arr.slice(i, i + chunkSize));
        i += chunkSize;
    }
    return chunks;
}
exports.default = arrayChunk;
//# sourceMappingURL=array_chunk.js.map