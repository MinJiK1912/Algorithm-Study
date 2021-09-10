//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/12916

function solution(s){
  s = s.toLowerCase();

  let countP = 0, countY = 0;
  for(let i=0; i<s.length; i++) {
    if(s[i] === 'p') countP++;
    if(s[i] === 'y') countY++;
  }

  if(countP === countY) return true;
  else return false;
}