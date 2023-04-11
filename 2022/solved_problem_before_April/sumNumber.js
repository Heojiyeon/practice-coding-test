function solution(a, b) {
    let answer = 0;
    let l = b, m = a;
    if (a - b < 0) {
        l = a, m = b;
    }
    for (i = l; i <= m; i++) {
        answer += i;
    }
    return answer;
}

console.log(solution(3, 5)); // 12