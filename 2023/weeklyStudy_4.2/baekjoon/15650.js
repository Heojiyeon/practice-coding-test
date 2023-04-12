// 15650번: N과 M(2)

function solution(N, M) {
  // 방문을 확인하기 위한 배열
  const visited = new Array(N).fill(false);
  // count 개수만큼 일시적으로 값을 담을 배열
  const tmp = [];
  // 결과를 담을 배열
  const result = [];

  // * 오름차순으로만 선택되어야 하기 때문에 시작점을 설정하는 dfs 함수 작성
  function dfs(start, count) {
    // * M만큼 실행했다면 result 배열에 push
    if (count === M) {
      result.push(tmp.join(" "));
    } else {
      for (let i = start; i <= N; i++) {
        // 1. 해당 위치 방문 표시 및 tmp 배열에 추가
        if (!visited[i]) {
          visited[i] = true;
          tmp.push(i);

          // 2. 다음 값 선택을 위한 dfs 재귀 실행
          dfs(i, tmp.length);

          // 3. 재귀 실행이 끝나면 결과 및 방문 배열 초기화
          visited[i] = false;
          tmp.pop();
        }
      }
    }
  }
  dfs(1, 0);
  return result.join("\n");
}

const fs = require("fs");
const [info] = fs.readFileSync("15650.txt").toString().trim().split("\n");
const [N, M] = info.split(" ").map(Number);
console.log(solution(N, M));
