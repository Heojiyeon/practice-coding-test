// 15649번: N과 M(1)

function solution(N, M) {
  // 방문한 위치를 확인하기 위한 배열
  const visited = new Array(N).fill(false);

  const output = [];
  let result = "";

  function dfs(count) {
    // * M의 크기만큼 dfs 실행한 경우 결과 리턴
    if (count === M) {
      result += `${output.join(" ")}\n`;
      return;
    }

    // 1. N의 크기만큼 순회
    for (let i = 0; i < N; i++) {
      // * 이미 방문한 경우 패스
      if (visited[i] === true) continue;

      // 2. 해당 위치 방문 표시 및 결과 배열에 추가
      visited[i] = true;
      output.push(i + 1);

      // 3. M의 크기만큼 dfs 재귀 실행
      dfs(count + 1);

      // 4. 재귀 실행이 끝나면 결과 및 방문 배열 초기화
      output.pop();
      visited[i] = false;
    }
  }

  dfs(0);
  return result.trim();
}

const fs = require("fs");
const [info] = fs.readFileSync("15649.txt").toString().trim().split("\n");
const [N, M] = info.split(" ").map(Number);
console.log(solution(N, M));
