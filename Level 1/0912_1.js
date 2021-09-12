//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
  let result = arr.filter((el) => el % divisor === 0).sort((a, b) => a - b);
    
  if(result.length === 0) return [-1];
  return result;
}