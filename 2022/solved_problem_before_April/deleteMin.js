function solution(arr) {
    let answer = [];
    let min;

    if (arr.length == 1) {
        answer.push(-1);
    } else {
        min = arr[0];
        for (i = 0; i < arr.length; i++) {
            if (min > arr[i]) {
                min = arr[i];
            }
        }
        for (j = 0; j < arr.length; j++) {
            if (arr[j] - min != 0) {
                answer.push(arr[j]);
            }
        }
    }
    return answer;
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
console.log(solution([5, -3, 4, 10, 2]));