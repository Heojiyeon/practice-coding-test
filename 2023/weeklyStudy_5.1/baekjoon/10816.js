// 10816번 : 숫자카드 2

const fs = require("fs");
const values = fs.readFileSync("10816.txt").toString().trim().split("\n");
const N = parseInt(values[0]);
const arrN = values[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const M = parseInt(values[2]);
const arrM = values[3].split(" ").map(Number);

const answer = [];

// 동일 값의 최소 인덱스 값을 구하는 함수
const getLowestIndex = target => {
  let start = 0;
  let end = N;

  while (start < end) {
    let mid = parseInt((start + end) / 2);
    // 찾아야하는 값보다 중간 값이 크거나 같은 경우
    if (arrN[mid] >= target) {
      end = mid;
    } else start = mid + 1;
  }
  return end;
};

// 동일 값의 최대 인덱스 값을 구하는 함수
const getHighestIndex = target => {
  let start = 0;
  let end = N;

  while (start < end) {
    let mid = parseInt((start + end) / 2);

    if (arrN[mid] > target) {
      end = mid;
    } else start = mid + 1;
  }
  return end;
};

for (let i = 0; i < M; i++) {
  let high = getHighestIndex(arrM[i]);
  let low = getLowestIndex(arrM[i]);
  answer.push(high - low);
}

console.log(answer.join(" "));
