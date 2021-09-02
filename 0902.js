//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/12937

function solution(num) {
  //당연히 될줄알았는데 왜 안되는 케이스가???
  //-> 음수 생각 안함
  num = Math.abs(num);
  if(num%2 === 1) return "Odd";
  else return "Even";
}