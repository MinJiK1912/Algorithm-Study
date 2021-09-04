//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/12901
//09/05 단계별 폴더로 분류

function solution(a, b) {
    
  const DAY = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  const DAYSOFMONTH = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30];
  //a월 이전까지의 날짜수 계산용
  
  let days = b - 1;
  for(let i=0; i<a; i++) days += DAYSOFMONTH[i];
  
  return DAY[days%7];
}