function solution(graph, R, C) {
  const person = new Array(R).fill(0).map(() => new Array(C).fill(-1));
  const fire = new Array(R).fill(0).map(() => new Array(C).fill(-1));

  // 불과 지훈이 시작점 찾기 및 0 초기화
  const personQueue = [];
  const fireQueue = [];

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (graph[i][j] === "F") {
        fireQueue.push([i, j]);
        fire[i][j] = 0;
      }
      if (graph[i][j] === "J") {
        personQueue.push([i, j]);
        person[i][j] = 0;
      }
    }
  }

  const DIRX = [0, 0, -1, 1];
  const DIRY = [-1, 1, 0, 0];

  // 불의 전파 시간
  let fireIdx = 0;

  while (fireQueue.length > fireIdx) {
    let currLoc = fireQueue[fireIdx];
    for (let i = 0; i < 4; i++) {
      let currX = currLoc[0] + DIRX[i];
      let currY = currLoc[1] + DIRY[i];

      // * 범위를 벗어나는 경우 패스
      if (currX < 0 || currX >= R || currY < 0 || currY >= C) continue;
      // * 이미 지나갔거나 벽인 경우 패스
      if (fire[currX][currY] !== -1 || graph[currX][currY] === "#") continue;

      // 지나갈 수 있는 경우, 시간 계산
      fire[currX][currY] = fire[currLoc[0]][currLoc[1]] + 1;
      fireQueue.push([currX, currY]);
    }
    fireIdx++;
  }

  // 지훈이 탈출 시간
  let personIdx = 0;
  while (personQueue.length > personIdx) {
    let currLoc = personQueue[personIdx];

    for (let i = 0; i < 4; i++) {
      let currX = currLoc[0] + DIRX[i];
      let currY = currLoc[1] + DIRY[i];

      // 탈출 성공시, 해당 시간 리턴
      if (currX < 0 || currX >= R || currY < 0 || currY >= C) {
        check = true;
        return person[currLoc[0]][currLoc[1]] + 1;
      }

      // * 지훈이가 이미 지나갔거나 벽인 경우 패스
      if (person[currX][currY] >= 0 || graph[currX][currY] === "#") continue;
      // * 불이 이미 지나가고, 지훈이가 지나가는 시간이 더 클 경우 패스
      if (
        fire[currX][currY] !== -1 &&
        fire[currX][currY] <= person[currLoc[0]][currLoc[1]] + 1
      )
        continue;
      person[currX][currY] = person[currLoc[0]][currLoc[1]] + 1;
      personQueue.push([currX, currY]);
    }
    personIdx++;
  }
  // 탈출 불가
  return "IMPOSSIBLE";
}

let [info, ...input] = require("fs")
  .readFileSync("4179.txt")
  .toString()
  .trim()
  .split("\n");
let [R, C] = info.split(" ").map(Number);
let graph = input.map(v => v.split("").filter(val => val !== "\r"));

console.log(solution(graph, R, C));
