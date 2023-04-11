// function solution(land) {
//     let results = land[0];

//     const findMax = (arr) => Math.max(...arr);
//     const findIdx = (arr, target) => arr.indexOf(target);

//     let prevIdx;

//     const answer = results.map((result) => {
//         prevIdx = findIdx(results, result);
//         console.log("handling index is ", prevIdx);
//         let j = 1;
//         while (j < land.length) {
//             let currLand = land[j];
//             console.log("currLand", currLand);
//             let currMax = findMax(currLand);
//             let currIdx = findIdx(currLand, currMax);
//             if (prevIdx == currIdx) {
//                 currLand[currIdx] = 0;
//                 currMax = findMax(currLand);
//                 currIdx = findIdx(currLand, currMax);
//             }
//             result += currMax;
//             console.log(currMax, currIdx);
//             prevIdx = currIdx;
//             j++;
//         }
//         console.log("curr result", result);
//         return result;
//     })
//     console.log(answer);
//     return findMax(answer);

// }
function solution(land) {
    let dp = Array.from(Array(land.length), () => new Array(4).fill(0));
    console.log(dp);

    dp[land.length - 1][0] = land[land.length - 1][0];
    dp[land.length - 1][1] = land[land.length - 1][1];
    dp[land.length - 1][2] = land[land.length - 1][2];
    dp[land.length - 1][3] = land[land.length - 1][3];
    for (let i = land.length - 2; i >= 0; i--) {
        dp[i][0] = land[i][0] + Math.max(dp[i + 1][1], dp[i + 1][2], dp[i + 1][3]);
        dp[i][1] = land[i][1] + Math.max(dp[i + 1][0], dp[i + 1][2], dp[i + 1][3]);
        dp[i][2] = land[i][2] + Math.max(dp[i + 1][1], dp[i + 1][0], dp[i + 1][3]);
        dp[i][3] = land[i][3] + Math.max(dp[i + 1][1], dp[i + 1][2], dp[i + 1][0]);
    }
    return Math.max(dp[0][0], dp[0][1], dp[0][2], dp[0][3]);
}

console.log(solution([[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]])); //16
// console.log(solution([[4, 3, 2, 1], [2, 2, 2, 1], [6, 6, 6, 4], [8, 7, 6, 5]])); //20
// console.log(solution([[1, 1, 1, 1], [2, 2, 2, 3], [3, 3, 3, 6], [4, 4, 4, 7]])); //14