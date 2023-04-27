const fs = require("fs");
const [info, ...input] = fs
  .readFileSync("15663.txt")
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
  console.log(graph);

  function dfs(count, start) {
    if (count === M) {
      result.push(tmp.join(" "));
    } else {
      for (let i = start; i < N; i++) {
        tmp.push(graph[i]);
        dfs(count + 1, start + 1);
        tmp.pop();
      }
    }
  }
  dfs(0, 0);
  //   const set = new Set(result);
  //   console.log(set);
  return result.join("\n");
}
