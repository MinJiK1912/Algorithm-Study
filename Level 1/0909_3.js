//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
  if(num === 1) return 0;
  
  for(let i=1; i<=500; i++) {
      if(num % 2 === 0) num = num / 2;
      else num = num * 3 + 1;
      
      if(num === 1) return i;
  }
  
  return -1;
}