function solution(rectangle, characterX, characterY, itemX, itemY) {
  const recWidth = rectangle[rectangle.length - 1][2];
  const recHeight = rectangle[rectangle.length - 1][3];
  //   console.log(recWidth, recHeight);

  const visited = Array.from(Array(recHeight + 1), () =>
    Array(recWidth + 1).fill(0)
  );

  // 갈 수 있는 위치 체크
  let currX, currY;
  rectangle.map(curr => {
    // 세로 (1~4)
    const maxX = curr[2];
    const maxY = curr[3];

    for (let i = curr[1]; i < maxY; i++) {
      visited[curr[0]][i] = 1;
      visited[curr[2]][i] = 1;
    }

    // 가로
    for (let i = curr[0]; i < maxX; i++) {
      visited[i][curr[1]] = 1;
      visited[i][curr[3]] = 1;
    }
  });

  console.log(visited);

  const DIRX = [0, 0, -1, 1];
  const DIRY = [-1, 1, 0, 0];

  const queue = [];
  queue.push([characterX, characterY]);

  const minX = rectangle[0][0];
  const minY = rectangle[0][3];
  const maxX = rectangle[rectangle.length - 1][2];
  const maxY = rectangle[rectangle.length - 1][3];

  let count = 0;
  let result = [];

  while (queue.length !== 0) {
    console.log("queue", queue);
    const loc = queue.shift();

    if (loc[0] === itemX && loc[1] === itemY) {
      result.push(count);
      count = 0;
    }

    for (let i = 0; i < 4; i++) {
      const currX = loc[0] + DIRX[i];
      const currY = loc[1] + DIRY[i];

      //갈 수 있는 경로 queue에 push
      if (currX < minX || currX > maxX || currY < minY || currY > maxY)
        continue;
      if (visited[currX][currY] !== -1 && visited[currX][currY] === 1) {
        visited[currX][currY] = -1;
        queue.push([currX, currY]);
        count++;
      }
    }
  }

  return result;
}

console.log(
  solution(
    [
      [1, 1, 7, 4],
      [3, 2, 5, 5],
      [4, 3, 6, 9],
      [2, 6, 8, 8],
    ],
    1,
    3,
    7,
    8
  )
); //14
