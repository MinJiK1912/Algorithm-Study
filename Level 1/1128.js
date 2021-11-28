//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/42862

/*
* 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다.
* 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어,
* 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나
* 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한
* 많은 학생이 체육수업을 들어야 합니다.

* 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost,
* 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때,
* 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.
*/

function solution(n, lost, reserve) {
  let student = new Array(n).fill(1);
  lost.forEach((st) => { student[st-1]--; });
  reserve.forEach((st) => { student[st-1]++; });
  
  for(let i=0; i<student.length; i++) {
      if(student[i] === 0) {
          if(student[i-1] > 1) {
              student[i-1]--;
              student[i]++;
          }
          else if(student[i+1] > 1) {
              student[i+1]--;
              student[i]++;
          }
      }
  }
  
  return student.filter((st) => st > 0).length;
}