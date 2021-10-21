//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/77884

/*
* 두 정수 left와 right가 매개변수로 주어집니다.
* left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고,
* 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(left, right) {
  let answer = 0;
  
  for(let i=left; i<=right; i++) {
      let divNum = countDiv(i);
      
      if(divNum % 2) answer -= i;
      else answer += i;
  }
  
  return answer;
}

const countDiv = (num) => {
  let count = 0;
  for(let i=1; i<=num; i++) {
      if(num%i === 0) count++;
  }
  
  return count;
}