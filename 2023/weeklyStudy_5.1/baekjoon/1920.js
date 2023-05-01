// 1920번: 수 찾기
// arrM에 있는 M개의 수들이 arrN에 존재하는 지 여부를 1, 0으로 표현
function solution(N, M, arrN, arrM) {
  arrN.sort((a, b) => a - b);

  const result = new Array(Number(M)).fill(0);

  // 정렬된 배열의 시작과 끝값, 중간값을 이용해 존재하는지 확인하는 코드
  arrM.map((val, idx) => {
    let start = 0;
    let end = N - 1;
    while (start <= end) {
      let mid = Math.floor((end + start) / 2);

      if (arrN[mid] === val) {
        result[idx] = 1;
        break;
      } else if (arrN[mid] < val) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  });

  return result.join("\n");
}

const fs = require("fs");
const values = fs.readFileSync("1920.txt").toString().trim().split("\n");

const N = values[0].split("\r")[0];
const M = values[2].split("\r")[0];
const arrN = values[1].split(" ").map(Number);
const arrM = values[3].split(" ").map(Number);

console.log(solution(N, M, arrN, arrM));
