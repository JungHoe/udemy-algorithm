function sameFrequency(num1: number, num2: number): boolean {
  const t1 = num1.toString().split("");
  const t2 = num2.toString().split("");
  if (t1.length !== t2.length) {
    return false;
  }
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < t1.length; i += 1) {
    sum1 += t1[i].charCodeAt(0);
    sum2 += t2[i].charCodeAt(0);
  }
  if (sum1 === sum2) {
    return true;
  }

  return false;
}

function areThereDuplicates(...arg: string[] | number[]): boolean {
  const maps: { [key: string | number]: number } = {};
  for (let i = 0; i < arg.length; i += 1) {
    const keys = arg[i];
    const item = maps[keys];
    if (item === undefined) {
      maps[keys] = 1;
    } else {
      return true;
    }
  }
  return false;
}

// console.log(areThereDuplicates(1, 2, 3));
// console.log(areThereDuplicates(1, 2, 2));
// console.log(areThereDuplicates("a", "b", "c", "a"));

function averagePair(arr: number[], avg: number): boolean {
  if (arr.length < 1) {
    return false;
  }
  const targetValue = avg * 2;
  let startPointer = 0;
  let endPointer = arr.length - 1;
  while (startPointer < endPointer) {
    const item1 = arr[startPointer];
    const item2 = arr[endPointer];
    const sum = item1 + item2;
    if (sum === targetValue) {
      return true;
    } else {
      if (sum < targetValue) {
        startPointer += 1;
      } else {
        endPointer += -1;
      }
    }
  }
  return false;
}

// console.log(averagePair([1, 2, 3], 2.5));
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
// console.log(averagePair([], 4));

function isSubsequence(target: string, sentence: string) {
  const targetLength = target.length;
  if (targetLength > sentence.length) {
    return false;
  }

  let targetIndex = 0;
  for (let i = 0; i < sentence.length; i += 1) {
    const targetChar = target[targetIndex];
    const sentenceChar = sentence[i];
    if (targetChar === sentenceChar) {
      targetIndex += 1;
      if (targetLength === targetIndex) {
        return true;
      }
    }
  }
  return false;
}

// console.log(isSubsequence("hello", "hello world"));
// console.log(isSubsequence("sing", "sting"));
// console.log(isSubsequence("abc", "abracadabra"));
// console.log(isSubsequence("abc", "acb"));

function minSubArrayLen(arr: number[], target: number) {
  let loopPointer = 0;
  let totalPointer = 0;
  let minLength = Infinity;
  let total = 0;
  //loopPointer 가 끝까지 도착할경우 loop를 종료함
  while (loopPointer < arr.length) {
    //현재 합계가 목표된 숫자보다 작을경우 현재 pointer값을 더하고 index를 증가시킨다.
    if (total < target) {
      // totalPointer가 bound 를 넘어간경우 loopPointer를 증가시킨다.
      if (totalPointer < arr.length) {
        total += arr[totalPointer];
        totalPointer += 1;
      } else {
        loopPointer += 1;
      }
    } else {
      // 합산한 값보다 타겟값이 클경우 현재까지 증가된 Index의 길이를 측정하여 최소값인지 비교한다 이후 loop pointer값을 빼주고 index를 증가시킨다.
      const tempLength = totalPointer - loopPointer;
      minLength = tempLength < minLength ? tempLength : minLength;
      total -= arr[loopPointer];
      loopPointer += 1;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));

function findLongestSubstring(str: string): number {
  let startIndex = 0;
  let endIndex = 0;
  let store: { [key: string]: number } = {};
  let tempLength = 0;
  // 시작index가 끝까지 도착할때까지 loop를 돌린다
  while (startIndex < str.length) {
    const item = str[endIndex];
    const keyExist = store.hasOwnProperty(item);
    if (keyExist) {
      // 중복 문자열을 만나면 현재까지 길이를 저장한다.
      tempLength = Math.max(tempLength, endIndex - startIndex);
      // 시작 지점과 끝지점을 중복문자열 다음으로 옮긴다.
      startIndex = store[item];
      endIndex = store[item];
      // store 를 reset 시킨다.
      store = {};
    } else {
      // 중복 문자열이 없으면 현재 문자열을 key로 다음index를 store에 저장하고 end index를 증가시킨다.
      store[item] = endIndex + 1;
      if (endIndex !== str.length) {
        endIndex += 1;
      }
    }
  }
  return tempLength;
}

// console.log(findLongestSubstring("")); // 0
// console.log(findLongestSubstring("rithmschool")); // 7
// console.log(findLongestSubstring("thet")); // 3
// console.log(findLongestSubstring("thisisawesome")); // 6
// console.log(findLongestSubstring("thecatinthehat")); // 7
// console.log(findLongestSubstring("bbbbbb")); // 1
// console.log(findLongestSubstring("longestsubstring")); // 8
// console.log(findLongestSubstring("thisishowwedoit")); // 6
// console.log(findLongestSubstring("pwwkew")); // 3
