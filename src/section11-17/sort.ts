const bubbleSort = (arr: number[]): number[] => {
  const result = arr.slice();
  // 반복문을 돌며  left와 right 를 비교한다.
  for (let i = 0; i < result.length; i += 1) {
    let noSwap = true;
    for (let j = 1; j < result.length - i; j += 1) {
      const left = result[j - 1];
      const right = result[j];
      console.log(left, right);
      //  left 가 right 보다 클경우 오른쪽으로 옮긴다
      if (left > right) {
        result[j - 1] = right;
        result[j] = left;
        noSwap = false;
      }
    }
    // (최적화) 정렬이 완료됐는데 Loop를 돌면 종료한다.
    if (noSwap) break;
  }
  return result;
};

// const bubble1 = bubbleSort([1, 26, 34, 14, 15, 5]);
// const bubble2 = bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);

const selectionSort = (arr: number[]): any => {
  const result = arr.slice();
  for (let i = 0; i < result.length - 1; i += 1) {
    // array의 최소값과 위치를 저장하는 변수를 지정한다.
    let minimumIndex = i;
    for (let j = i; j < result.length; j += 1) {
      const item = result[j];
      // 최소값을 찾으면 해당index를 저장한다.
      if (item < result[minimumIndex]) {
        minimumIndex = j;
      }
    }
    // 현재index와 최소index의 위치가 다를경우 swap 한다.
    if (i !== minimumIndex) {
      console.log(i, minimumIndex);
      const temp = result[i];
      result[i] = result[minimumIndex];
      result[minimumIndex] = temp;
    }
  }
  return result;
};
// const select1 = selectionSort([8, 1, 2, 3, 4, 5, 6, 7]);
// const select2 = selectionSort([0, 2, 34, 22, 10, 19, 17]);

const insertionSort = (arr: number[]): any => {
  const result = arr.slice();
  // 1번째 인자부터 loop를 돈다
  for (let i = 1; i < result.length; i += 1) {
    // 삽입이 일어날 element 저장
    const target = result[i];
    // 정렬된 array중 target보다 작은값이 있으면 우측으로 밀고 해당 위치에 target을 저장한다.
    for (let j = i; 0 < j && result[j - 1] > target; j += -1) {
      result[j] = result[j - 1];
      result[j - 1] = target;
    }
  }
  return result;
};
const insert1 = insertionSort([2, 1, 9, 76, 4]);
const insert2 = insertionSort([8, 5, 6, 2, 4]);
