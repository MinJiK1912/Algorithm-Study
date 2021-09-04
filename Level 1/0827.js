//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/77484
//09/05 단계별 폴더로 분류

function solution(lottos, win_nums) {
  let answer = [];
  const LOTTO = [6, 6, 5, 4, 3, 2, 1]; //LOTTO[일치하는 갯수] = 순위
  
  //0이 몇개인지 count
  //0을 제외한 숫자 중 일치하는 숫자가 몇개인지 count
  //최고: 0 제외 일치 + 0 갯수 / 최저: 0 제외 일치
  
  let unknownNum = 0;
  let lottoNum = 0;
  
  //입력값이 길이가 6인 배열인 걸 알아서 forEach 안에서 선형탐색(includes)
  //실제로는 O(n^2)의 시간복잡도를 가지게 되므로 입력값이 많은 경우에는 사용 어려움 ㅠ
  lottos.forEach((num) => {
      if(num === 0) unknownNum++;
      if(win_nums.includes(num)) lottoNum++;
  })
  
  return [LOTTO[lottoNum + unknownNum], LOTTO[lottoNum]];
}