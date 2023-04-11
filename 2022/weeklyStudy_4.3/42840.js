function solution(answers) {
    const p1 = [1, 2, 3, 4, 5];
    const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let answer = [];
    let score = [0, 0, 0];

    for (i = 0; i < answers.length; i++) {
        if (answers[i] === p1[i % p1.length]) score[0]++;
        if (answers[i] === p2[i % p2.length]) score[1]++;
        if (answers[i] === p3[i % p3.length]) score[2]++;
    }

    const max = Math.max(...score);

    for (let i = 0; i < score.length; i++) {
        if (max === score[i]) answer.push(i + 1);
    }
    return answer;
}



// console.log(solution([1, 2, 3, 4, 5]));//[1]
// console.log(solution([1, 3, 2, 4, 2])); //[1,2,3]
// console.log(solution([1, 4, 2, 4, 5, 2, 1, 1, 5, 3, 4])); // [3, 1, 2] => [1]
console.log(solution([0, 0, 0, 0, 0, 0, 2])); // [1, 2]
console.log(solution([3, 3, 2, 1, 5])); //[3]
console.log(solution([5, 5, 4, 2, 3]));//[1,2,3]
console.log(solution([1])); // [1]