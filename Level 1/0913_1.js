//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {    
  if(s.length !== 4 && s.length !== 6) return false;
  
  if(s.match(/[^0-9]/g)) return false;
  else return true;;
}