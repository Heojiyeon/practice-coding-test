// 15654번 : N과 M(5)

function solution(N, M, graph) {
  const result = [];
  const tmp = [];

  graph.sort((a, b) => a - b);

  function dfs(count) {
    if (count === M) {
      result.push(tmp.join(" "));
    } else {
      for (let i = 0; i < N; i++) {
        // * tmp 배열에 이미 존재하는 경우 패스
        if (tmp.findIndex(val => val === graph[i]) !== -1) continue;

        // 1. 주어진 graph 값 tmp 배열에 push
        tmp.push(graph[i]);

        // 2. M만큼 dfs 함수 재귀 실행
        dfs(count + 1);

        // 3. 재귀 실행이 끝나면 tmp 배열 값 pop
        tmp.pop();
      }
    }
  }
  dfs(0);
  return result.join("\n");
}

const fs = require("fs");
const [info, ...input] = fs
  .readFileSync("15654.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M] = info.split(" ").map(Number);
const graph = input.map(v => v.split(" ").map(Number)).flat(1);

console.log(solution(N, M, graph));
