const fs = require("fs");
const [info, ...input] = fs
  .readFileSync("11047.txt")
  .toString()
  .trim()
  .split("\n");
const [N, K] = info.split(" ").map(Number);
const graph = input
  .map(v => v.split("\r"))
  .flat()
  .filter(v => v !== "")
  .map(Number);

console.log(solution(N, K, graph));

// 런타임 에러
// function solution(N, K, graph) {
//   let count = 0;

//   let idx = N - 1;

//   function counting(currMoney) {
//     let rest = currMoney - graph[idx];
//     if (rest === 0 || idx < 0) {
//       return;
//     } else if (rest > 0) {
//       currMoney = rest;
//       count++;
//     } else {
//       idx--;
//     }
//     counting(currMoney);
//   }

//   counting(K);

//   return count + 1;
// }

// 올바른 풀이
function solution(N, K, graph) {
  let rest = K;
  let count = 0;

  graph.sort((a, b) => b - a);

  for (let i = 0; i < N; i++) {
    if (rest < graph[i]) continue;
    // 현재 값이 rest 값보다 작은 경우 최대로 사용할 수 있는 개수를 찾아 계산
    const value = Math.floor(rest / graph[i]);
    rest -= graph[i] * value;
    count += value;
  }

  return count;
}
