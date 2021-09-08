//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  return String(n).split('').reduce((sum, el) => sum += Number(el), 0);
}