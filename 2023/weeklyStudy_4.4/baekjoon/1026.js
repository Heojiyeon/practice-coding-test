// 1026번 : 보물
function solution(N, A, B) {
  // 주어진 두 배열을 정렬한 후 계산 값 리턴
  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);

  return A.map((val, idx) => val * B[idx]).reduce((prev, curr) => prev + curr);
}

const fs = require("fs");
const [info, ...input] = fs
  .readFileSync("1026.txt")
  .toString()
  .trim()
  .split("\n");
const N = info.split(" ").map(Number)[0];
const [A, B] = input.map(v => v.split(" ").map(Number));

console.log(solution(N, A, B));
