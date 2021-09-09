//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  //원래의 배열 arr가 바뀌면 안됨
  let sortedArr = arr.slice().sort((a, b) => a - b);
  let minIdx = arr.indexOf(sortedArr[0]);
  arr.splice(minIdx, 1);
  
  if(arr.length === 0) return [-1];
  return arr;
}