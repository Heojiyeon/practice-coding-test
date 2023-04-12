// 1561번: N과 M(3)

function solution(N, M) {
  // count 개수만큼 일시적으로 값을 담을 배열
  const tmp = [];
  // 결과를 담을 배열
  const result = [];

  // * 중복으로 선택이 가능하므로 count만 받는 dfs 함수 작성
  function dfs(count) {
    // * M만큼 실행했다면 result 배열에 push
    if (count === M) {
      result.push(tmp.join(" "));
    } else {
      for (let i = 0; i < N; i++) {
        // 1. tmp 배열에 값 추가
        tmp.push(i + 1);

        // 2. 다음 값 선택을 위한 dfs 재귀 실행
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
const [info] = fs.readFileSync("15651.txt").toString().trim().split("\n");
const [N, M] = info.split(" ").map(Number);
console.log(solution(N, M));
