//프로그래머스 2단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/12913

/*
* 땅따먹기 게임을 하려고 합니다. 땅따먹기 게임의 땅(land)은 총 N행 4열로 이루어져 있고,
* 모든 칸에는 점수가 쓰여 있습니다. 1행부터 땅을 밟으며 한 행씩 내려올 때, 각 행의 4칸 중 한 칸만 밟으면서 내려와야 합니다.
* 단, 땅따먹기 게임에는 한 행씩 내려올 때, 같은 열을 연속해서 밟을 수 없는 특수 규칙이 있습니다.
* 마지막 행까지 모두 내려왔을 때, 얻을 수 있는 점수의 최대값을 return하는 solution 함수를 완성해 주세요.
*/

function solution(land) {
    
  const result = new Array(land.length);
  for(let i=0; i<result.length; i++) result[i] = new Array(4);
  result[0] = land[0];
  
  for(let ROW=1; ROW<land.length; ROW++) {
      for(let COL = 0; COL<4; COL++) {
          let idx = result[ROW-1].indexOf(Math.max(...result[ROW-1]));
          result[ROW][COL] = land[ROW][COL] + result[ROW-1][idx];
          
          //같은 열일 경우 바로 위의 값 제외하고 최대값 더하기
          if(COL === idx) {
              const temp = result[ROW-1].slice();
              temp.splice(idx, 1, -1);
              result[ROW][COL] = land[ROW][COL] + result[ROW-1][temp.indexOf(Math.max(...temp))];
          }
      }
  }
  
  return Math.max(...result[result.length-1]);
}