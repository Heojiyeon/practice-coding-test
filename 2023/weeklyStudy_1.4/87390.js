// n^2 배열 자르기 문제
function solution(n, left, right) {
  let result = [];

  for (let i = left; i <= right; i++) {
    result.push(Math.max(Math.floor(i / n), i % n) + 1);
  }
  return result;

  // O(n) - 시간 초과 풀이
  // while (idx < n * n) {
  //   console.log("idx", idx);
  //   if (idx >= left && idx <= right) {
  //     result.push(Math.max(col, row) + 1);
  //   }
  //   if (idx > right) break;
  //   if ((idx + 1) % n === 0) {
  //     row++;
  //     col = 0;
  //   } else {
  //     col++;
  //   }
  //   idx++;
  // }
  // console.log(result);
  // O(n) - 틀린 풀이
  //   let count = 1;
  //   for (let i = 1; i <= n * n; i++) {
  //     console.log("current i", i);
  //     if (i % n === 0) {
  //       count++;
  //     }
  //     if (i - 1 >= left && i - 1 <= right) {
  //       i % n === 0 ? result.push(n) : result.push(Math.max(count, i / n));
  //     }
  //   }

  //O(n^2) - 시간 초과 풀이
  //   let count = 0;
  //   for (let i = 1; i < n + 1; i++) {
  //     for (let j = 1; j < n + 1; j++) {
  //       if (count >= left && count <= right) {
  //         result.push(Math.max(i, j));
  //       }
  //       count++;
  //     }
  //   }

  // return result;
}

console.log(solution(3, 2, 5)); // [3, 2, 2, 3]
console.log(solution(4, 7, 14)); // [4,3,3,3,4,4,4,4]
