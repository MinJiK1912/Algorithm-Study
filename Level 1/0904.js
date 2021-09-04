//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/12934
//09/05 단계별 폴더로 분류

function solution(n) {
  const sqrt = parseInt(Math.sqrt(n));
  
  for(let i=1; i<=sqrt; i++) {
      if(i*i === n) return Math.pow(i+1, 2);
  }
  return -1;
}