//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
  //x(?=y) 는 오직 y가 뒤따라오는 x에만 대응
  //\d(?=\d{4}) 는 4개의 숫자가 뒤따라오는 나머지 숫자에만 대응
  return phone_number.replace(/\d(?=\d{4})/g, '*');
}