function solution(n) {
    let answer;
    const x = Math.sqrt(n);
    return answer = Math.pow(x, 2) == n ? Math.pow(x + 1, 2) : -1;
}

console.log(solution(121));
console.log(solution(3));
console.log(solution(144));