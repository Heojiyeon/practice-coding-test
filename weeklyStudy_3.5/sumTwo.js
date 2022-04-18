function solution(numbers) {
    let sum = 0;
    let curr;
    let result = [];

    for (i = 0; i < numbers.length; i++) {
        curr = numbers[i];
        for (j = i + 1; j < numbers.length; j++) {
            sum = curr + numbers[j];
            result.push(sum);
        }
    }
    result.sort((a, b) => a - b);
    return Array.from(new Set(result));
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));