//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/12930#

function solution(s) {
  let strArr = s.split(' ');
  
  strArr = strArr.map((word) => {
      word = word.split('').map((char, idx) => {
        //return 짝수인덱스면 ? 대문자 : 소문자 여야되는데
        //대문자는 줬으면서 소문자를 안 줘서 계속 틀렸음
        //return (idx%2 === 0) ? char.toUpperCase() : char <- 여기서 소문자를 안줌 ㅋㅋ
          return (idx%2 === 0) ? char.toUpperCase() : char.toLowerCase();
      })
      return word.join('');
  })
  
  return strArr.join(' ');
}