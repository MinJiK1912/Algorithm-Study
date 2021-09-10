//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
  let idx = Math.floor(s.length / 2);
  if(s.length % 2) return s[idx];
  else return s.slice(idx-1, idx+1); //idx+1인 이유 -> idx-1와 idx번째만 출력
}