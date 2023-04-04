// 1926번: 그림

function solution(graph, N, M) {
  let count = 0;
  let maxWidth = 0;

  // 방문한 위치를 확인하기 위한 배열
  let visit = new Array(N).fill(0).map(() => new Array(M).fill(-1));

  // 동서남북 방향
  const dirX = [1, -1, 0, 0];
  const dirY = [0, 0, 1, -1];

  // 1. 이중 for문으로 순회하면서 이동할 수 있는 곳 찾기
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      // * 갈 수 없거나 이미 방문한 경우 패스
      if (graph[i][j] === 0 || visit[i][j] === 1) continue;

      // 2. 그림의 개수 + 1, 해당 위치 방문 표시
      count++;
      visit[i][j] = 1;

      // 3. 그림의 크기를 확인하기 위한 area, queue 선언
      let area = 0;
      const queue = [];

      // 4. 현재 방문한 위치를 queue에 담기
      queue.push([i, j]);

      // 5. queue에 값이 존재하는 경우 반복문 실행 (동서남북으로 이동할 수 있는 곳 확인 및 그림의 크기 계산)
      while (queue.length !== 0) {
        // 6. 그림의 크기 +1
        area++;

        // 7. 현재 위치에서 이동할 수 있는 곳 queue에 push
        let currLoc = queue.pop();
        for (let i = 0; i < 4; i++) {
          let nx = currLoc[0] + dirX[i];
          let ny = currLoc[1] + dirY[i];

          // * 주어진 graph 범위를 넘어가는 경우 패스
          if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
          // * 이미 방문했거나, 갈 수 없는 경우 패스
          if (visit[nx][ny] === 1 || graph[nx][ny] !== 1) continue;

          // 8. 방문 위치 표시
          visit[nx][ny] = 1;
          queue.push([nx, ny]);
        }
      }

      // 9. 계산된 그림의 크기 중 최댓값 계산
      maxWidth = Math.max(maxWidth, area);
    }
  }
  return maxWidth;
}

let [info, ...input] = require("fs")
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split("\n");
let [N, M] = info.split(" ").map(Number);
let graph = input.map(v => v.split(" ").map(Number));

console.log(solution(graph, N, M));
