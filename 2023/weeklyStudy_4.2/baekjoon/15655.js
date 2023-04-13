// 15655번: N과 M(6)

function solution(N, M, graph) {
  const result = [];
  const tmp = [];

  graph.sort((a, b) => a - b);

  function dfs(count) {
    if (count === M) {
      result.push(tmp.join(" "));
    } else {
      for (let i = 0; i < N; i++) {
        // * tmp 배열에 이미 값이 존재하는 경우 패스
        if (tmp.findIndex(val => val === graph[i]) !== -1) continue;
        // * 오름차순으로 존재해야 하므로 tmp의 마지막 값보다 작은 경우 패스
        if (tmp[tmp.length - 1] > graph[i]) continue;

        tmp.push(graph[i]);
        dfs(count + 1);
        tmp.pop();
      }
    }
  }
  dfs(0);
  return result.join("\n");
}

const fs = require("fs");
const [info, ...input] = fs
  .readFileSync("15655.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M] = info.split(" ").map(Number);
const graph = input.map(v => v.split(" ").map(Number)).flat(1);

console.log(solution(N, M, graph));
