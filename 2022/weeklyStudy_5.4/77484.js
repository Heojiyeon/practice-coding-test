// function solution(lottos, win_nums) {
//     let result = [];
//     let countSame = 0;
//     let countZero = 0;
//     let answer = [];

//     for (i = 0; i < lottos.length; i++) {
//         let currNum = lottos[i];
//         if (win_nums.includes(currNum)) countSame++;
//         else if (currNum == 0) countZero++;
//     }
//     result.push(countSame + countZero, countSame);

//     for (count of result) {
//         if (count < 1) answer.push(6);
//         else answer.push(Math.abs(count - 7));
//     }
//     return answer;
// }

function solution(lottos, win_nums) {
    let result = [];
    let countSame = 0;
    let countZero = 0;

    for (curr of lottos) {
        if (win_nums.includes(curr)) countSame++;
        else if (curr == 0) countZero++;
    }
    result.push(calRank(countSame + countZero), calRank(countSame));
    return result;
}

function calRank(count) {
    let rank = 0;
    if (count < 1) rank = 6;
    else rank = Math.abs(count - 7);
    return rank;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3, 5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); //[1,6]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); //[1,1]