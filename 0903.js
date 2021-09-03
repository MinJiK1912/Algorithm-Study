//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
  let sum = String(x).split('').reduce((sum, el) => sum+=Number(el), 0);
  
  if(x%sum === 0) return true;
  else return false;
}