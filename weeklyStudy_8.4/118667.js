// const getSum = (arr) => {
//     return arr.length == 0 ? 0 : arr.reduce((a, b) => a + b);
// }

// function solution(queue1, queue2) {

//     const targetNum = (getSum(queue1) + getSum(queue2)) / 2;

//     const LEN = queue1.length * 3;

//     let result = 0;

//     let sumQ1 = getSum(queue1);
//     let sumQ2 = getSum(queue2);

//     function handleQ(queue1, queue2, sumQ1, sumQ2) {
//         if (result > LEN) return -1;
//         if (sumQ1 == targetNum && sumQ2 == targetNum) return result;
//         else {
//             let curr;

//             if (targetNum < sumQ1) {
//                 curr = queue1[0];
//                 queue1.shift();
//                 queue2.push(curr);
//                 sumQ1 -= curr;
//                 sumQ2 += curr;
//             }
//             else if (targetNum < sumQ2) {
//                 curr = queue2[0];
//                 queue2.shift();
//                 queue1.push(curr);
//                 sumQ1 += curr;
//                 sumQ2 -= curr;
//             }
//             result++;
//             return handleQ(queue1, queue2, sumQ1, sumQ2);
//         }
//     }
//     return handleQ(queue1, queue2, sumQ1, sumQ2);
// }

const getSum = (arr) => {
    return arr.reduce((a, b) => a + b);
}

function solution(queue1, queue2) {
    let sumQ1 = getSum(queue1);
    let sumQ2 = getSum(queue2);

    const totalQ = [...queue1, ...queue2];

    let targetNum = (sumQ1 + sumQ2) / 2;
    let start = 0;
    let end = queue1.length;

    let LEN = queue1.length * 3;

    for (let result = 0; result < LEN; result++) {
        if (sumQ1 == targetNum) return result;
        if (sumQ1 > targetNum) sumQ1 -= totalQ[start++];
        else sumQ1 += totalQ[end++];
    }
    return -1;
}

// console.log(solution([1, 1, 1], [1, 1, 1])); //0
// console.log(solution([3, 2, 7, 2], [4, 6, 5, 1])); //2
// console.log(solution([1, 1, 1, 1, 1], [1, 1, 1, 9, 1])); //12
console.log(solution([1, 1, 1, 8, 10, 9], [1, 1, 1, 1, 1, 1])); //14
// console.log(solution([1, 2, 1, 2], [1, 10, 1, 2])); //7
// console.log(solution([1, 1], [1, 5])); //-1
// console.log(solution([1, 1, 1], [5, 1, 1])); //4