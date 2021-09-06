//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
  arr1 = arr1.map((num) => makeBinary(n, num));
  arr2 = arr2.map((num) => makeBinary(n, num));
  
  let result = [];
  for(let i=0; i<arr1.length; i++) {
    result.push(compareArr(arr1[i], arr2[i]));
  }
  
  return result;
}

//makeBinary: arr1, arr2의 각 요소를 2진수로 변환하는 함수
const makeBinary = (len, num) => {
  let binaryNum = new Array(len).fill(0);
  num = num.toString(2).split('').map((n) => Number(n));
  binaryNum = binaryNum.slice(num.length);
  return binaryNum.concat(num);
}

//compareArr: arr1과 arr2의 각 요소를 비교해 문제에서 원하는 형태로 변환
const compareArr = (el1, el2) => {
  let result = new Array();
  
  for(let i=0; i<el1.length; i++) {
      if(el1[i] || el2[i]) result.push('#');
      else result.push(' ');
  }
  
  return result.join('');
}