// 15652번 : N과 M(4)

function solution(N, M) {
  const tmp = [];
  const result = [];

  function dfs(count) {
    if (count === M) {
      return result.push(tmp.join(" "));
    } else {
      for (let i = 0; i < N; i++) {
        // * 비내림차순이 아닌 경우 패스
        if (tmp[tmp.length - 1] > i + 1) continue;

        // 1. 비내림차순을 만족한다면 tmp 배열에 값 추가
        tmp.push(i + 1);

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
const [info] = fs.readFileSync("15652.txt").toString().trim().split("\n");
const [N, M] = info.split(" ").map(Number);
console.log(solution(N, M));
