//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
  numbers.sort((a, b) => a - b);
  
  let result = 0;
  for(let i=0; i<10; i++) {
      if(numbers[i] !== i) {
          result += i;
          numbers.splice(i, 0, i);
      }
  }
  
  return result;
}