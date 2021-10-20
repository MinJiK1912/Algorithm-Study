//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/86491

/*
* 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다.
* 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(sizes) {
  const sortedSizes = sizes.map((size) => {
      return size[0] < size[1] ? [size[0], size[1]] : [size[1], size[0]];
  })
  
  let width = 0, height = 0;
  sortedSizes.forEach((size) => {
      width = width > size[0] ? width : size[0];
      height = height > size[1] ? height : size[1];
  })
  
  return width * height;
}