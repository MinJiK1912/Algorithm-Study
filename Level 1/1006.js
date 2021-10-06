//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/12921

/*
* 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
* 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
* (1은 소수가 아닙니다.)
*/

function solution(n) {
  let prime = new Array();

  for(let i=2; i<=n; i++) {
    if(isPrime(i)) prime.push(i)
  }
  return prime.length;
}

const isPrime = (num) => {
  for(let i=2; i<=Math.sqrt(num); i++) {
    if(num%i === 0) return false;
  }
  return true;
}