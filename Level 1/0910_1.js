//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/12940

function solution(n, m) {
  let GCD, LCM;

  const [bigNum, smallNum] = n > m ? [n, m] : [m, n];
  //유클리드 호제법으로 최대공약수 구함
  GCD = getGCD(bigNum, smallNum);
  LCM = n * m / GCD;

  return [GCD, LCM];
}

const getGCD = (num1, num2) => {
  if(num1 % num2) return getGCD(num2, (num1 % num2));
  return num2;
}