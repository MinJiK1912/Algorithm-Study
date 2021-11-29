//프로그래머스 2단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/12953

/*
* 두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다.
* 예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중
* 공통이 되는 가장 작은 숫자가 됩니다. n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수,
* solution을 완성해 주세요.
*/

const getGCD = (num1, num2) => {
  if(num2%num1 === 0) return num1;
  else return getGCD(num2%num1, num1);
}

const getLCM = (num1, num2) => {
  let GCD = getGCD(num1, num2);
  return num1 * num2 / GCD;
}

function solution(arr) {
  //0번째 1번째 최소공배수 구하고, 걔랑 2번 최소공배수 구하고, 걔랑 3번...
  //재귀적으로 구성
  arr.sort((a, b) => a - b);
  
  if(arr.length === 2) return getLCM(arr[0], arr[1]);
  else return solution([getLCM(arr[0], arr[1]), ...arr.slice(2)]);
}