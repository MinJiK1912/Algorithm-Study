//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
  return arr.reduce((sum, el) => sum += el, 0) / arr.length;
}