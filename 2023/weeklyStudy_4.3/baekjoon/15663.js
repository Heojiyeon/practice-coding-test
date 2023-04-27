const fs = require("fs");
const [info, ...input] = fs
  .readFileSync("15663.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M] = info.split(" ").map(Number);
const nums = input.map(v => v.split(" ").map(Number)).flat(1);
console.log(solution(N, M, nums));

function solution(N, M, nums) {
  const result = [];
  const tmp = [];

  nums.sort((a, b) => a - b);
  console.log(nums);

  function dfs(count) {
    if (count === M) {
      result.push(tmp.join(" "));
    }
    for (let i = 0; i < N; i++) {
      if (tmp[tmp.length - 1] === nums[i]) continue;
      else {
        tmp.push(nums[i]);
        dfs(count + 1);
        tmp.pop();
      }
    }
  }
  dfs(0);
  console.log(result);
  return result.join("\n");
  //   return [...answer].join("\n");
}
