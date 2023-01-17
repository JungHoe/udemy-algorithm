function countUniqueValues(arr: number[]): number {
  let count = 0;
  let lastNumber = undefined;
  // loop를 돌면서 Last number를 기억한다.
  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i];
    if (item !== lastNumber) {
      lastNumber = item;
      count += 1;
    }
  }
  return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
