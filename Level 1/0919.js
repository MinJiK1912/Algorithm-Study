//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/17682

/*
* 카카오톡 게임별의 하반기 신규 서비스로 다트 게임을 출시하기로 했다.
* 다트 게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임으로, 모두가 간단히 즐길 수 있다.
* 갓 입사한 무지는 코딩 실력을 인정받아 게임의 핵심 부분인 점수 계산 로직을 맡게 되었다. 다트 게임의 점수 계산 로직은 아래와 같다.

* 다트 게임은 총 3번의 기회로 구성된다.
* 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
* 점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고
* 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
* 옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다.
* 아차상(#) 당첨 시 해당 점수는 마이너스된다.
* 스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)
* 스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고)
* 스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
* Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
* 스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.
* 0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.
*/

function solution(dartResult) {
  //앞에서부터 한자리씩 짤라서 숫자 나오면 앞에있던 내용 비우고 새로 점수매기기
  //10점은 이전 값이 숫자인지 아닌지 체크
  //NaN도 타입은 Number인데 어떻게? -> 정규식 활용
  
  dartResult = dartResult.split('');
  let curScore = new Array();
  let scoreSet = new Array();
  
  while(dartResult.length){
      let curChar = dartResult.shift();
      
      //현재 문자(curChar)가 숫자인 경우
      //1. 한자리수(0~9점)일 경우 -> 그냥 curScore 비우고 추가하면됨
      //2. 두자리수(10점)일 경우 -> 앞의 숫자가 숫자인지 체크해서 연결
      //curChar가 숫자인데 curScore의 길이가 1이면 10점이라는 뜻
      if(/[0-9]/.test(curChar)) {
          if(curScore.length === 1) curScore.push(curChar);
          else {
              scoreSet.push(curScore.join(''));
              curScore = new Array();
              curScore.push(curChar);
          }
      }
      else curScore.push(curChar);
      
      if(dartResult.length === 0) scoreSet.push(curScore.join(''));
  }
  scoreSet.shift();
  
  const scoreBoard = new Array(3);
  
  //scoreSet에 점수 넣어놨으니 계산해서 scoreBoard에 넣어주기만 하면 그만
  scoreSet.forEach((curScore, idx) => {
      let score = Number(curScore.match(/[0-9]/g).join(''));
      let options = curScore.match(/[^0-9]/g);
      let exponent = options[0], bonus;
      if(options.length > 1) bonus = options[1];
      
      const pow = [0, 'S', 'D', 'T'];
      
      scoreBoard[idx] = Math.pow(score, pow.indexOf(exponent));
      
      if (bonus === '*') {
          if(idx > 0) scoreBoard[idx-1] *= 2;
          scoreBoard[idx] *= 2;
      }
      
      if(bonus === '#') scoreBoard[idx] *= -1;
  })
  
  return scoreBoard.reduce((sum, el) => sum += el, 0);
}