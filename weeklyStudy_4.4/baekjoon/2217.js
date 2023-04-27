// 2217번: 로프
function solution(N, graph) {
  const arr = [];

  // 로프의 중량을 내림차순으로 정렬
  graph.sort((a, b) => b - a);

  // N개의 로프의 중량 계산 후 push
  for (let i = 0; i < N; i++) {
    arr.push(graph[i] * (i + 1));
  }
  // 모든 값 중 최댓값 리턴
  return Math.max(...arr);
}

const fs = require("fs");
const [info, ...input] = fs
  .readFileSync("2217.txt")
  .toString()
  .trim()
  .split("\n");
const N = Number(info);
const graph = input.map(v => v.split(" ").map(Number)).flat();

console.log(solution(N, graph));
