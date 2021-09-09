//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/12954

function solution(x, n) {
  let result = [x];
  
  for(let i=1; i<n; i++) {
      result[i] = x + result[i-1];
  }
  
  return result;
}