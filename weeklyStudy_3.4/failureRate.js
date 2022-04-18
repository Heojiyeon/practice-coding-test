/*
function solution(N, stages) {
    let count1 = 0;
    let count2 = 0;
    let arr = [];

    for (i = 1; i <= N; i++) {
        for (j = 0; j < stages.length; j++) {
            if (i == stages[j]) {
                count1++;
            }
            else if (i < stages[j]) {
                count2++;
            }
        }
        arr.push(count1 / count2);
        count1 = 0;
        count2 = 0;
    }
    console.log(arr);

    let arrMax = arr.indexOf(Math.max(...arr));
    console.log(arrMax);
}
*/

function calRate(i, stages) {
    let count1 = 0;
    let count2 = 0;
    let rate = 0;

    for (j = 0; j < stages.length; j++) {
        if (stages[j] == i) count2++;
        if (stages[j] > i) count1++;
    }
    rate = count2 / count1;
    return rate;
}

function solution(N, stages) {
    let arr = [];
    let obj = {};
    let result = [];

    for (i = 1; i <= N; i++) {
        arr.push({
            stage: i,
            rate: calRate(i, stages)
        });
    }
    arr.sort((a, b) => (a.rate > b.rate) ? -1 : 1);
    console.log(arr);

    for (i = 0; i < arr.length; i++) {
        result.push(arr[i].stage);
    }
    return result;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
// [3, 4, 2, 1, 5]
console.log(solution(4, [4, 4, 4, 4, 4]));
console.log(solution(3, [1, 1, 1]));