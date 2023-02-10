// 타겟 넘버 문제 - dfs
function solution(numbers, target) {
  let answer = 0;

  function dfs(i, sum) {
    console.log(i, sum);
    if (i === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    } else {
      dfs(i + 1, sum + numbers[i]);
      dfs(i + 1, sum - numbers[i]);
    }
  }
  dfs(0, 0);
  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3)); //5
console.log(solution([4, 1, 2, 1], 4)); //2
