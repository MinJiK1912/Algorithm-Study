//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
  //연속되는 숫자를 제외해야 함
  let result = [];
  arr.forEach((el, idx) => {
      if(idx === 0) result.push(el);
      else {
          if(el !== arr[idx-1]) result.push(el);
      }
  })
  
  return result;
}