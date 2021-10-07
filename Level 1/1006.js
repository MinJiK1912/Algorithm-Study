//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/12921

/*
* 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
* 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
* (1은 소수가 아닙니다.)
*/

function solution(n) {
  //* 에라토스테네스의 체:
  //* 소수를 구하고자 하는 범위 2~n이 있을 때,
  //* 2~n의 제곱근에 해당하는 범위 안의 소수의 배수들을 계속 제외하면 결국 소수만 남는다

  let isPrime = new Array(n+1).fill(true).fill(false, 0, 2);

  for(let i=2; i<=Math.sqrt(n); i++) {
    for(let j=i; j<=n; j+=i) {
      if(j/i === 1) continue;
      if(isPrime[j]) isPrime[j] = false;
    }
  }

  return isPrime.filter((num) => num).length;
}