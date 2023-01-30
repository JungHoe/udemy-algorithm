"use strict";
function naiveSearch(long, short) {
    let result = 0;
    const LoopIndex = long.length - short.length + 1;
    for (let i = 0; i < LoopIndex; i += 1) {
        for (let j = 0; j < short.length; j += 1) {
            const shortChar = short[j];
            if (long[i + j] === shortChar) {
                if (j === short.length - 1) {
                    result += 1;
                }
            }
            else {
                break;
            }
        }
    }
    console.log(result);
    return result;
}
// naiveSearch("omgekwl", "zz"); // 0
// naiveSearch("omgekwl", "mg"); // 1
// naiveSearch("ooo", "oo"); // 2
// naiveSearch("AAAAAAA", "AAA"); // 5
//# sourceMappingURL=naiveSearch.js.map