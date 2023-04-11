// 귤 고르기 문제
function solution(k, tangerine) {
  let map = new Map();
  for (let item of tangerine) {
    let getItem = map.get(`${item}`);
    if (getItem === undefined) {
      map.set(`${item}`, 1);
    } else {
      map.set(`${item}`, getItem + 1);
    }
  }
  let handledMap = new Map([...map].sort((a, b) => b[1] - a[1]));
  let result = 0;
  for ([, value] of handledMap) {
    if (k - value >= 0) {
      result++;
      k -= value;
    } else if (value > k && k !== 0) {
      result++;
      break;
    } else break;
  }
  return result;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])); //3
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])); //2
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])); //1
