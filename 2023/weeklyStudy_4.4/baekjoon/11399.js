// 11399: ATM
function solution(N, P) {
  // 주어진 배열 정렬
  P.sort((a, b) => a - b);
  let result = 0;

  // 시작 ~ 현재 값까지의 합을 결과에 합산하여 리턴
  for (let i = 0; i < N; i++) {
    result += P.slice(0, i + 1).reduce((a, b) => a + b);
  }
  return result;
}

const fs = require("fs");
const [info, ...input] = fs
  .readFileSync("11399.txt")
  .toString()
  .trim()
  .split("\n");
const N = info.split(" ").map(Number)[0];
const P = input[0].split(" ").map(Number);

console.log(solution(N, P));
