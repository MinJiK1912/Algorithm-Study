//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  s = s.split('').map((char) => {
    if(char === ' ') return char;

    const asciiChar = char.charCodeAt();
    if(asciiChar <= 90) { //대문자
      if(asciiChar + n > 90) //Z 넘어가는 경우
        return String.fromCharCode(asciiChar + n - 26);
      else return String.fromCharCode(asciiChar + n);
    } 
    else if(asciiChar >= 97) { //소문자
      if(asciiChar + n > 122) //z 넘어가는 경우
        return String.fromCharCode(asciiChar + n - 26);
      else return String.fromCharCode(asciiChar + n);
    }
  })

  return s.join('');
}