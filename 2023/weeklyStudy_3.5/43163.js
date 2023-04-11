/* 단어 변환 문제
주어진 조건에 맞게 단어를 변환하고, 마지막 target에 도달하는 단계의 최소 개수 리턴
도달할 수 없는 경우 0 리턴 */

function solution(begin, target, words) {
  const queue = [];
  const visited = [];
  let currMin = 0;

  queue.push(begin);

  // 주어진 words에 target이 없는 경우 0 리턴
  if (words.findIndex(word => checkSameWord(word, target)) === -1) {
    return 0;
  }

  // queue에 값이 존재하는 경우 실행하는 반복문
  while (queue.length > 0) {
    let curr = queue.pop();
    visited.push(curr);

    // target에 도달했는 지 확인하고, 최단 거리인지 확인하는 조건문
    if (checkSameWord(curr, target)) {
      if (currMin === 0) {
        currMin = visited.length - 1;
      }
      currMin > visited.length - 1 ? (currMin = visited.length - 1) : currMin;
    }

    // words를 순회하면서 조건에 만족하는 단어를 찾아 queue에 push
    words.map((word, idx) => {
      if (word !== 0 && checkRules(curr, word)) {
        queue.push(word);
        words[idx] = 0;
      }
    });
  }
  return currMin;
}

// 두 단어가 동일한 지 확인하는 함수
function checkSameWord(first, second) {
  return JSON.stringify(first) === JSON.stringify(second) ? true : false;
}

// 주어진 조건을 만족하는 지 확인하는 함수
function checkRules(begin, after) {
  let count = 0;

  for (let i = 0; i < begin.length; i++) {
    begin[i] === after[i] ? count++ : count--;
    if (count === -2) break;
  }
  return count !== begin.length - 2 ? false : true;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); //4
// console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); //0
