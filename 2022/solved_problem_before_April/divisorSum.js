function solution(n) {
    let answer = 0;
    for (i = 0; i <= n; i++) {
        if (n % i == 0) {
            answer += i;
        }
    }
    return answer;
}

console.log(solution(12));
console.log(solution(5));