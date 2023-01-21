// 푸드 파이트 대회 (134240)
function solution(food) {
  let result = "";

  food.map((curr, idx) => {
    let count = Math.floor(curr / 2);
    result += (idx + "").repeat(count);
  });
  result += "0";
  result += result
    .split("")
    .splice(0, result.length - 1)
    .reverse()
    .join("");

  return result;
}

console.log(solution([1, 3, 4, 6])); //"1223330333221"
console.log(solution([1, 7, 1, 2])); //"111303111"
