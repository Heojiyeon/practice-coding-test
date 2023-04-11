function solution(numbers, target) {
    let answer = 0;

    function dfs(i, sum) {
        console.log("i", i, "sum", sum);
        if (i === numbers.length) {
            if (sum === target) {
                console.log("sum", sum, "target", target);
                answer++;
                console.log("answer", answer);
            }
        } else {
            console.log("+++++++++");
            dfs(i + 1, sum + numbers[i]);
            console.log("---------");
            dfs(i + 1, sum - numbers[i]);
        }
    }

    dfs(0, 0);

    return answer;
}

// console.log(solution([1, 1, 1, 1, 1], 3)); //5
// console.log(solution([4, 1, 2, 1], 4)); //2
console.log(solution([1, 1, 1], 1)); //3