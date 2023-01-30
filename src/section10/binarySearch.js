"use strict";
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i += 1) {
        const item = arr[i];
        if (target === item) {
            return i;
        }
    }
    return -1;
}
// linearSearch([10, 15, 20, 25, 30], 15); // 1
// linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4); // 5
// linearSearch([100], 100); // 0
// linearSearch([1, 2, 3, 4, 5], 6); // -1
// linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10); // -1
// linearSearch([100], 200); // -1
function getMiddleIndex(a, b) {
    return Math.trunc((a + b) / 2);
}
// function binarySearch(arr: number[], target: number): number {
//   let leftPointer = 0;
//   let rightPointer = arr.length - 1;
//   let middlePointer = getMiddleIndex(leftPointer, rightPointer);
//   while (leftPointer < rightPointer) {
//     const middleItem = arr[middlePointer];
//     if (arr[leftPointer] === target) {
//       return leftPointer;
//     } else if (arr[rightPointer] === target) {
//       return rightPointer;
//     } else if (middleItem === target) {
//       return middlePointer;
//     } else {
//       if (leftPointer === middlePointer || rightPointer === middlePointer) {
//         break;
//       }
//       if (middleItem < target) {
//         leftPointer = middlePointer;
//       } else {
//         rightPointer = middlePointer;
//       }
//       middlePointer = getMiddleIndex(leftPointer, rightPointer);
//     }
//   }
//   return -1;
// }
function binarySearch(arr, target) {
    let leftPointer = 0;
    let rightPointer = arr.length - 1;
    let middlePointer = getMiddleIndex(leftPointer, rightPointer);
    const noData = -1;
    while (arr[middlePointer] !== target) {
        // 모든 pointer 가 일치하는 시점에 while 문을 빠져나가지 못하면 -1 을 리턴
        if (leftPointer === middlePointer && middlePointer === rightPointer) {
            return noData;
        }
        if (arr[middlePointer] < target) {
            leftPointer = middlePointer + 1;
        }
        else {
            rightPointer = middlePointer - 1;
        }
        middlePointer = getMiddleIndex(leftPointer, rightPointer);
    }
    return middlePointer;
}
// binarySearch([1, 2, 3, 4, 5], 1); // 0
// binarySearch([1, 2, 3, 4, 5], 2); // 1
// binarySearch([1, 2, 3, 4, 5], 3); // 2
// binarySearch([1, 2, 3, 4, 5], 5); // 4
// binarySearch([1, 2, 3, 4, 5], 6); // -1
// binarySearch(
//   [
//     5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//     99,
//   ],
//   10
// );
// // 2
// binarySearch(
//   [
//     5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//     99,
//   ],
//   95
// );
// // 16
// binarySearch(
//   [
//     5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//     99,
//   ],
//   100
// );
// -1
//# sourceMappingURL=binarySearch.js.map