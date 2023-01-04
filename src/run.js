"use strict";
const addUpTo = (n) => {
    let total = 0;
    for (let i = 1; i <= n; i += 1) {
        total += i;
    }
    return total;
};
const addUpTo2 = (n) => {
    return (n * (n + 1)) / 2;
};
const printTime = (a, b) => {
    console.log(`Time Diff ===  ${(b - a) / 1000}`);
};
const t1 = performance.now();
console.log(addUpTo(100000000));
const t2 = performance.now();
printTime(t1, t2);
console.log();
const t3 = performance.now();
console.log(addUpTo2(100000000));
const t4 = performance.now();
printTime(t3, t4);
