function solution(arr, divisor) {
    let result = [];

    for (i = 0; i < arr.length; i++) {
        if (arr[i] % divisor == 0) result.push(arr[i]);
    }
    if (result.length == 0) result.push(-1);
    return result.sort((a, b) => a - b);
}

function solution2(arr, divisor) {
    let result = [];

    arr.map((o) => (o % divisor) == 0 ? result.push(o) : null);

    if (result.length == 0) result.push(-1);
    return result.sort((a, b) => a - b);
}

console.log(solution2([5, 9, 7, 10], 5)); //[5, 10]
console.log(solution2([2, 36, 1, 3], 1)); //[1, 2, 3, 36]
console.log(solution2([3, 2, 6], 10)); //-1