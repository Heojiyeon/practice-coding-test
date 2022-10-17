function solution(n) {
    const dp = [0, 1, 2];
    if (n < 3)
        return dp[n];
    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
    }
    console.log(dp);
    return dp[n];
}

// console.log(solution(7));
console.log(solution(4)); //5
// console.log(solution(3)); //3