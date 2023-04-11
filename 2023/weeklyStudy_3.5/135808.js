/* 과일 장수 문제
사과의 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 
사과들의 점수 score가 주어졌을 때, 과일 장수가 얻을 수 있는 최대 이익을 return */
function solution(k, m, score) {
  // 주어진 score 배열을 큰 값 순으로 정렬한다.
  score.sort((a, b) => b - a);

  let result = 0;

  // m의 개수에 해당하는 점수 중 가장 마지막 인덱스 값이 제일 작은 값임을 이용해 계산한다.
  for (let i = m - 1; i < score.length; i += m) {
    result += score[i] * m;
  }
  return result;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])); //8
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])); //33
