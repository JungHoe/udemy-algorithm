"use strict";
function reverse(str) {
    function helper(idx) {
        return idx === 0 ? str[idx] : str[idx] + helper(idx - 1);
    }
    return helper(str.length - 1);
}
// reverse("awesome"); // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
function isPalindrome(str) {
    // string 중간에서 나눈다
    // 1. array length를 구한다
    const length = str.length;
    if (length <= 1) {
        return true;
    }
    const left = str[0];
    const right = str[length - 1];
    // 양끝이 같다면 왼쪽오른족 배열을 자르고 새로 배열을 호출한다.
    if (left === right) {
        return isPalindrome(str.slice(1, str.length - 1));
    }
    else {
        return false;
    }
}
// console.log(isPalindrome("awesome")); // false
// console.log(isPalindrome("foobar")); // false
// console.log(isPalindrome("tacocat")); // true
// console.log(isPalindrome("amanaplanacanalpanama")); // true
// console.log(isPalindrome("amanaplanacanalpandemonium")); // false
// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;
function someRecursive(arr, fn) {
    if (arr.length === 0) {
        return false;
    }
    const lastIndex = arr.length - 1;
    const item = arr[lastIndex];
    if (fn(item)) {
        return true;
    }
    else {
        arr.pop();
        return someRecursive(arr, fn);
    }
}
const isOdd = (val) => val % 2 !== 0;
function flatten(arr) {
    let result = [];
    function innerFlatten(idx) {
        const item = arr[idx];
        if (typeof item === "number") {
            result.push(item);
            if (idx + 1 < arr.length) {
                innerFlatten(idx + 1);
            }
        }
        else {
            result = result.concat(flatten(item));
            if (idx + 1 < arr.length) {
                innerFlatten(idx + 1);
            }
        }
    }
    innerFlatten(0);
    return result;
}
// flatten([1, 2, 3]); // [1, 2, 3]
// flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
// flatten([1, 2, 3, [4, 5, [6]]]); // [1, 2, 3, 4, 5,6]
// flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
// flatten([[1], [2], [3]]); // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3
function capitalizeFirst(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i += 1) {
        const item = arr[i];
        const first = item.charAt(0).toUpperCase();
        const text = first + item.slice(1, item.length);
        result.push(text);
    }
    return result;
}
// capitalizeFirst(["car", "taco", "banana"]); // ['Car','Taco','Banana']
function nestedEvenSum(obj) {
    let result = 0;
    for (const key in obj) {
        const item = obj[key];
        if (typeof item === "number" && item % 2 === 0) {
            result += item;
        }
        else {
            if (typeof item === "object") {
                result += nestedEvenSum(item);
            }
        }
    }
    return result;
}
const obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup",
        },
    },
};
const obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: "car" },
};
// nestedEvenSum(obj1); // 6
// nestedEvenSum(obj2); // 10
function capitalizeWords(arr) {
    let result = [];
    if (arr.length === 1) {
        return arr[0].toUpperCase();
    }
    for (let i = 0; i < arr.length; i += 1) {
        const temp = arr.slice(i, i + 1);
        result.push(capitalizeWords(temp));
    }
    return result;
}
// capitalizeWords(["car", "taco", "banana"]); // ['CAR','TACO','BANANA']
const obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66,
        },
    },
};
function stringifyNumbers(obj) {
    const result = {};
    for (const key in obj) {
        const item = obj[key];
        result[key] = item;
        if (typeof item === "number") {
            result[key] = item.toString();
        }
        else if (typeof item === "object" && !Array.isArray(item)) {
            result[key] = stringifyNumbers(item);
        }
    }
    return result;
}
// stringifyNumbers(obj);
/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
function collectStrings(obj) {
    let result = [];
    for (const key in obj) {
        const item = obj[key];
        if (typeof item === "string") {
            result.push(item);
        }
        else if (typeof item === "object" && !Array.isArray(item)) {
            const innerResult = collectStrings(item);
            if (innerResult.length > 0) {
                result = result.concat(innerResult);
            }
        }
    }
    return result;
}
const obj3 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz",
                    },
                },
            },
        },
    },
};
collectStrings(obj3); // ["foo", "bar", "baz"])
//# sourceMappingURL=recursiveQuest.js.map