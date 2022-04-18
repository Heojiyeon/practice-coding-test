function solution(n) {
    let answer = [];
    const num = n + '';
    for (i = num.length - 1; i >= 0; i--) {
        answer.push(Number(num[i]));
    }
    return answer;
}

console.log(solution(12345));