"use strict";
/*
빈도수세기 문제
 1. array 2개가 주어진다
 2. 첫번째 array값의 제곱값이 두번째 array 에 존재하는지 확인한다
 3. 단 빈도수는 같아야하고 정렬조건은 상관없다
*/
function same(arr1, arr2) {
    let valid = false;
    // 두 array의 갯수가 같은지 체크
    if (arr1.length !== arr2.length) {
        return false;
    }
    // arr1 제곱의 합이 arr2와 같은지 확인
    let acc1 = 0;
    let acc2 = 0;
    for (let i = 0; i < arr1.length; i += 1) {
        acc1 += arr1[i] * arr1[i];
        acc2 += arr2[i];
    }
    if (acc1 === acc2) {
        return true;
    }
    return false;
}
const test1 = [1, 2, 382, 2859];
const test2 = [145924, 8173881, 4, 4];
console.log(same(test1, test2));
/*
  아나그램 문제 ) 2개의 문자가 주어질때 아나그램인지 체크하는함수
*/
function isAnagram(str1, str2) {
    // 1. 두 문자열의 갯수가 같은지 확인한다.
    if (str1.length !== str2.length) {
        return false;
    }
    // 2. 문자열의 갯수가 같으면 loop를 돌며 각 str문자열의 ascii코드값을 가져온다.
    //2-1 문자열의 대소문자 처리한다.
    const validWord1 = str1.toLowerCase();
    const validWord2 = str2.toLowerCase();
    let acc1 = 0;
    let acc2 = 0;
    for (let i = 0; i < str1.length; i += 1) {
        acc1 += validWord1.charCodeAt(i);
        acc2 += validWord2.charCodeAt(i);
    }
    if (acc1 === acc2) {
        return true;
    }
    return false;
}
const word1 = "rat";
const word2 = "car";
console.log(isAnagram(word1, word2));
const word3 = "";
console.log(isAnagram(word3, word3));
const word4 = "iamoak";
const word5 = "maokai";
console.log(isAnagram(word4, word5));
