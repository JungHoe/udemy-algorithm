// power 재귀 구현

function power(number: number, times: number): number {
  return times === 0 ? 1 : number * power(number, times - 1);
}

// console.log(power(2, 0)); // 1
// console.log(power(2, 2)); // 4
// console.log(power(2, 4)); // 16

// Factorial 재귀구현

function factorial(num: number): number {
  if (num < 0) {
    throw new Error("Not allowed number");
  }
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));

function productOfArray(arr: number[]) {
  function helper(idx: number): number {
    if (idx === 0) {
      return arr[idx];
    }
    return arr[idx] * helper(idx - 1);
  }
  const result = helper(arr.length - 1);
  return result;
}

// productOfArray([1, 2, 3]); // 6

// productOfArray([1, 2, 3, 10]); // 60

function recursiveRange(num: number): number {
  if (num === 0) {
    return 0;
  } else {
    return num + recursiveRange(num - 1);
  }
}

recursiveRange(6); // 21
recursiveRange(10); // 55

// 피보나치숫자 찾기
function fib(nTH: number): number {
  if (nTH < 1) {
    throw new Error("Not Allowed Value");
  }
  if (nTH === 1 || nTH === 2) {
    return 1;
  }
  return fib(nTH - 1) + fib(nTH - 2);
}
// 1 1 2 3 5 8 13
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
