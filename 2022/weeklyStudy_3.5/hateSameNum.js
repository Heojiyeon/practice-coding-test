/*
function countNum(start, end) {
    return count = end - start - 1;
}

function solution(arr) {
    let start = 0;
    let end = 0;
    let count;

    for (i = 0; i < arr.length; i++) {
        if (arr[start] == arr[end]) {
            end++;
        } else {
            count = end - start - 1;
            arr.splice(start, count);
            console.log(arr);
        }
    }
}
*/

function solution(arr) {
    let result = [];

    for (i = 0; i < arr.length; i++) {
        if (result.length == 0) {
            result.push(arr[i]);
        } else if (result[result.length - 1] != arr[i]) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(solution([4, 4, 4, 3, 3]));
// console.log(solution([1, 1, 3, 3, 0, 1, 1]));