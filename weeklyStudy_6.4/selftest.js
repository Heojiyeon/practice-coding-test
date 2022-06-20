function solution(arr) {
    let result = [];

    const set = new Set(arr);
    let handled = [];

    for (i of set) {
        handled.push(i);
    }

    for (currNum of handled) {
        let count = 0;
        for (j = 0; j < arr.length; j++) {
            if (currNum == arr[j]) count++;
        }
        if (count >= 2) result.push(count);
    }

    if (result.length == 0) result.push(-1);
    return result;
}

console.log(solution([1, 2, 3, 3, 3, 3, 4, 4])); //[4, 2]
console.log(solution([3, 2, 4, 4, 2, 5, 2, 5, 5])); //[3, 2, 3]
console.log(solution([3, 5, 7, 9, 1])); //-1
console.log(solution([1, 1, 1, 1, 1])); // [5]