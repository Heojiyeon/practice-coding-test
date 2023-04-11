function solution(n, computers) {
  var answer = 0;

  // 방문했는 지 확인
  const check = Array.from({ length: n }, val => false);
  console.log("check", check);

  function DFS(index) {
    check[index] = true;
    console.log("curr check index", index);

    for (let i = 0; i < computers.length; i++) {
      console.log(i, computers[index][i], check[i]);
      if (computers[index][i] === 1 && !check[i]) {
        DFS(i);
      }
    }
  }

  for (let i = 0; i < computers.length; i++) {
    console.log("i", i);
    if (!check[i]) {
      DFS(i);
      answer += 1;
    }
  }
  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
); //2

// console.log(
//     solution(3, [
//         [1, 1, 0],
//         [1, 1, 1],
//         [0, 1, 1],
//     ])
// ); //1
