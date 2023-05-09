// 1931번: 회의실 배정
function solution(N, graph) {
  // 주어진 배열을 정렬하는 것이 포인트
  // 끝나는 시간 기준으로 정렬하되, 그 값이 동일하다면 시작 시간 순으로 정렬
  graph.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

  let count = 1;
  let currTime = graph[0][1];

  for (let i = 1; i < N; i++) {
    if (currTime > graph[i][0]) continue;
    currTime = graph[i][1];
    count++;
  }
  return count;
}

const fs = require("fs");
const [info, ...input] = fs
  .readFileSync("1931.txt")
  .toString()
  .trim()
  .split("\n");
const N = info.split(" ").map(Number);
const graph = input.map(v => v.split(" ").map(Number));

console.log(solution(N, graph));
