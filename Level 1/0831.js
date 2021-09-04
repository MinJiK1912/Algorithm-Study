//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/68644
//09/05 단계별 폴더로 분류

function solution(numbers) {
    
  let result = [];

  //시간복잡도 O(n^2), 좋다고 할 수 없는 알고리즘
  //입력값이 많지 않기때문에 사용 가능한 알고리즘임 -> 많아지면 사용 불가능
  for(let i=0; i<numbers.length; i++) {
      for(let j=i+1; j<numbers.length; j++) {
          result.push(numbers[i] + numbers[j]);
      }
  }
  
  return [...(new Set(result))].sort((a, b) => a - b);
}