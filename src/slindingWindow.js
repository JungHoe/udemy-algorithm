"use strict";
//slinding window 문제
//
function maxSubarraySum(arr, num) {
    // array 보다 targe이 큰경우는 null return
    if (arr.length < num) {
        return null;
    }
    let tempSum = 0;
    let maxSum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        const item = arr[i];
        // num보다 작은경우 tempSum init
        if (i + 1 <= num) {
            tempSum += item;
            maxSum = tempSum;
        }
        else {
            // i-num = 이미 슬라이딩된 Index
            const slidedIndex = i - num;
            tempSum += item - arr[slidedIndex];
            maxSum = Math.max(tempSum, maxSum);
            //   if (tempSum > maxSum) {
            //     maxSum = tempSum;
            //   }
        }
    }
    return maxSum;
}
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySum([], 4));
//# sourceMappingURL=slindingWindow.js.map