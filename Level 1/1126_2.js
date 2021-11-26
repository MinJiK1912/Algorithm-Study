//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/42840

/*
* 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다.
* 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

* 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
* 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
* 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

* 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때,
* 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
*/

function solution(answers) {
  const QUESTIONS = answers.length;
  //1번: 12345 12345
  //2번: 21232425 21232425
  //3번: 3311224455 3311224455
  let supoja = {1: '12345', 2: '21232425', 3:'3311224455'};
  
  for(let answer in supoja) {
      const LOOP = supoja[answer].length;
      
      supoja[answer] = supoja[answer].repeat(Math.floor(QUESTIONS/LOOP))
          .concat(supoja[answer].slice(0, QUESTIONS%LOOP))
          .split('')
          .map((marking) => Number(marking))
          //마킹한 답과 일치하는 것만 추려서 채점
          .filter((mark, idx) => mark === answers[idx])
          .length;
  }
  
  const result = new Array();
  for(let member in supoja) {
      //비교대상으로 1번 수포자 넣고 시작
      if(result.length === 0) result.push(member);
      else {
          //현재 수포자의 점수가 result 안에 들어가있는 값보다 작을 경우 건너뜀
          if(supoja[member] < supoja[result[0]]) continue;
          else if(supoja[member] > supoja[result[0]]) {
              result.shift();
              result.push(member);
          }
          else result.push(member);
      }

  }
  
  return result.map((el) => Number(el));
}