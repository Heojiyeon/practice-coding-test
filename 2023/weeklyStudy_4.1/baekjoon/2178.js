// 2178번 : 미로 탐색
function solution(graph, N, M) {
  // 위치 별 거리를 담기 위한 배열
  const distance = new Array(N).fill(0).map(() => new Array(M).fill(0));

  queue.push([0, 0]);

  const DIRX = [0, 0, -1, 1];
  const DIRY = [-1, 1, 0, 0];

  // 지나갈 수 있는 위치를 담기 위한 배열
  const queue = [];

  while (queue.length !== 0) {
    let currLoc = queue.shift();
    // 목적지에 도달했을 경우, 해당 위치의 거리 값 리턴
    if (currLoc[0] === N - 1 && currLoc[1] === M - 1) {
      return distance[N - 1][M - 1] + 1;
    }

    for (let i = 0; i < 4; i++) {
      let currX = DIRX[i] + currLoc[0];
      let currY = DIRY[i] + currLoc[1];

      // * 주어진 graph 범위 넘어갈 경우 패스
      if (currX < 0 || currX >= N || currY < 0 || currY >= M) continue;
      // * 이미 지나갔거나, 지나갈 수 없는 경우 패스
      if (distance[currX][currY] > 0 || graph[currX][currY] === 0) continue;

      // 해당 거리 값 변경
      distance[currX][currY] = distance[currLoc[0]][currLoc[1]] + 1;
      queue.push([currX, currY]);
    }
  }
  return distance[N - 1][M - 1] + 1;
}

let [info, ...input] = require("fs")
  .readFileSync("2178.txt")
  .toString()
  .trim()
  .split("\n");
let [N, M] = info.split(" ").map(Number);
let graph = input.map(v => v.split("").map(Number));

console.log(solution(graph, N, M));
