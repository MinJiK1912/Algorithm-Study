//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/12932
//09/05 단계별 폴더로 분류

function solution(n) {
  return String(n).split('').reverse().map((el) => Number(el));
}