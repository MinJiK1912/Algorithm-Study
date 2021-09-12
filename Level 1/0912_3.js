//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/12915

function solution(strings, n) {
  return strings.sort((a, b) => {
      let left = a[n], right = b[n];
      
      if(left === right) return (a > b) - (a < b);
      else return (left > right) - (left < right);
  })
}