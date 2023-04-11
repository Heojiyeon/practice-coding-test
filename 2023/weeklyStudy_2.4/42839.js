// 소수 찾기 문제
function solution(numbers) {
  const currResult = [];

  const permutation = (arr, num) => {
    const res = [];
    if (num === 1) return arr.map(v => [v]);

    arr.forEach((v, idx, arr) => {
      const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
      const permutations = permutation(rest, num - 1);
      const attach = permutations.map(permutation => [v, ...permutation]);
      res.push(...attach);
    });
    return res;
  };

  const isPrimeNumber = num => {
    if (num === 1 || num === 0) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  for (let i = 1; i <= numbers.length; i++) {
    const answer = permutation(numbers.split(""), i);

    answer.map(item => {
      item = item.join("") * 1;
      if (
        isPrimeNumber(item) &&
        currResult.findIndex(val => val === item) === -1
      ) {
        currResult.push(item);
      }
    });
  }
  return currResult.length;
}

// console.log(solution("17")); //3
// console.log(solution("011")); //2
