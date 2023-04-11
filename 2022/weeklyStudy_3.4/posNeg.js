function solution(absolutes, signs) {
    let arr = [];
    for (i = 0; i < signs.length; i++) {
        signs[i] = signs[i] ? 1 : -1;
        arr.push(absolutes[i] * signs[i]);
    }
    return arr.reduce((preVal, currVal) => preVal + currVal);
}

console.log(solution([4, 7, 12], [true, false, true]));
// 9
console.log(solution([1, 2, 3], [false, false, true]));
// 0