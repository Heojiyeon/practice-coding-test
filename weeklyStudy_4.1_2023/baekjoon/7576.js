// 7576번 : 토마토
function solution(graph, N, M) {
  let count = 0;
  const queue = [];

  // 시작점을 찾기 위한 이중 for문
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][j] === 1) {
        queue.push([i, j]);
      }
    }
  }

  const DIRX = [0, 0, -1, 1];
  const DIRY = [-1, 1, 0, 0];

  // * shift method 사용 시, 시간초과로 인한 index 사용
  let idx = 0;

  while (idx < queue.length) {
    let currLoc = queue[idx];

    for (let i = 0; i < 4; i++) {
      let currX = currLoc[0] + DIRX[i];
      let currY = currLoc[1] + DIRY[i];

      // * 주어진 graph 범위 넘어갈 경우 패스
      if (currX < 0 || currX >= M || currY < 0 || currY >= N) continue;
      // * 이미 익었거나, 토마토가 존재하지 않는 경우 패스
      if (graph[currX][currY] === -1 || graph[currX][currY] !== 0) continue;

      // 해당 토마토의 날짜 변경
      graph[currX][currY] = graph[currLoc[0]][currLoc[1]] + 1;
      queue.push([currX, currY]);

      count = graph[currX][currY];
    }
    idx++;
  }

  // 모든 토마토가 다 익었는 지 확인하는 이중 for문
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][j] === 0) return -1;
    }
  }

  // 아예 익지 못하는 경우를 처리하기 위한 코드
  return count === 0 ? 0 : count - 1;
}

let [info, ...input] = require("fs")
  .readFileSync("7576.txt")
  .toString()
  .trim()
  .split("\n");
let [N, M] = info.split(" ").map(Number);
let graph = input.map(v => v.split(" ").map(Number));

console.log(solution(graph, N, M));
