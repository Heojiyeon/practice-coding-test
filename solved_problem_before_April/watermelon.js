function solution(n) {
    let word = '';
    /*
    for (i = 1; i <= n; i++) {
        word = i % 2 != 0 ? word.concat('수') : word.concat('박');
    }
    return word;
    */
    return word = "수박".repeat(n).slice(0, n);
}

console.log(solution(3));
console.log(solution(4));
console.log(solution(10));