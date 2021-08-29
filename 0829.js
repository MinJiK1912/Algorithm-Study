//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
  let answer;
  
  n = String(n);
  answer = n.split('').map((el) => Number(el)); //n 한자리씩 자른 배열
  answer.sort((a, b) => b - a); //내림차순 정렬
  answer = answer.join().replace(/\,/g, '');
  
  return Number(answer);
}