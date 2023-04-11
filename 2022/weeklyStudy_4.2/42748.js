function solution(array, commands) {
    let answer;
    let result = [];

    for (n = 0; n < commands.length; n++) {
        let curr = commands[n];
        let i = curr[0];
        let j = curr[1];
        let k = curr[2];
        answer = array.slice(i - 1, j).sort((a, b) => a - b);
        result.push(answer[k - 1]);
    }
    return result;
}

function solution2(array, commands) {
    let answer = [];
    answer = commands.map((a) => {
        return array.slice(a[0] - 1, a[1]).sort((b, c) => b - c)[a[2] - 1];
    })
    return answer;
}

console.log(solution2([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));

// console.log(solution([1, 5, 2, 6, 3, 7, 4], [4, 4, 1])); //6
// console.log(solution([1, 5, 2, 6, 3, 7, 4], [1, 7, 3])); //3