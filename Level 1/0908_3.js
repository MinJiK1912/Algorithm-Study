//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
  const ROW = arr1.length, COL = arr1[0].length;
  const result = new Array(ROW);
  for(let i=0; i<ROW; i++) result[i] = new Array(COL);
  
  for(let row=0; row<ROW; row++) {
      for(let col=0; col<COL; col++) result[row][col] = arr1[row][col] + arr2[row][col];
  }
  
  return result;
}