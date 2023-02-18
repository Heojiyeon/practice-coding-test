// 124 나라의 숫자 문제
function solution(n) {
  const result = [];

  function recursion(num) {
    if (num === 0) return;

    let currQuot = Math.floor(num / 3);
    let getRest = num % 3;

    if (getRest === 0) {
      result.push("4");
      currQuot -= 1;
    } else {
      result.push(getRest);
    }

    recursion(currQuot);
    return result;
  }

  recursion(n);

  return result.reverse().join("");
}

console.log(solution(1)); // "1"
console.log(solution(6)); // "121"
