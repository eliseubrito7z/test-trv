"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function temporarySwap(array) {
    let length = array.length;
    for (let left = 0, right = length - 1; left < right; left++, right--) {
        let temporary = array[left];
        array[left] = array[right];
        array[right] = temporary;
    }
    return array;
}
exports.default = temporarySwap;
//# sourceMappingURL=array_swap.js.map