//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/12917

function solution(s) {
  //아스키 코드로 대/소문자 구분
  let upperStr = [], lowerStr = [];
  s.split('').forEach((char) => {
      if(char.charCodeAt() <= 90) upperStr.push(char);
      else lowerStr.push(char);
  })
  
  return lowerStr.sort().reverse().concat(upperStr.sort().reverse()).join('');
}