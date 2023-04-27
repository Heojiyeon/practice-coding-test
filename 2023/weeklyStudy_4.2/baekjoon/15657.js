const fs = require("fs");
const [info, ...input] = fs
  .readFileSync("15657.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M] = info.split(" ").map(Number);
const graph = input.map(v => v.split(" ").map(Number)).flat(1);

console.log(solution(N, M, graph));

function solution(N, M, graph) {
  const result = [];
  const tmp = [];

  graph.sort((a, b) => a - b);

  function dfs(count) {
    if (count === M) {
      result.push(tmp.join(" "));
    } else {
      for (let i = 0; i < N; i++) {
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
