function solution(n) {
    const num = n + '';
    let arr = [];
    let result = '';

    for (i = 0; i < num.length; i++) {
        arr.push(num[i]);
    }
    arr.sort().reverse();
    for (i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result / 1;
}

console.log(solution(11872));