const result = [6, 7, 8, 9];

function PrimeNumber(n) {
    let arr = [];
    for (let i = 2; i <= n; i++) {
        arr[i] = i;
    }
    for (let i = 2; i <= n; i++) {
        if (arr[i === 0]) continue;
        for (let j = i + i; j <= n; j += i) {
            arr[j] = 0;
        }
    }
    let answer = [];
    for (let i = 0; i <= n; i++) {
        if (arr[i] !== 0 && arr[i] !== undefined) {
            answer.push(i);
        }
    }
    return answer;
}

console.log(findPrime(answer));

// function solution(nums) {
//     let count = 0;
//     let answer = [];
//     for (i = 0; i < nums.length; i++) {
//         let curr = nums[i];
//         let sum;
//         for (j = 1; j < nums.length; j++) {
//             let curr_2 = nums[j];
//             for (k = 2; k < nums.length; k++) {
//                 let curr_3 = nums[k];
//                 count++;
//                 console.log(curr, curr_2, curr_3);
//                 console.log("count", count);
//                 sum = curr + curr_2 + curr_3;
//                 answer.push(sum);
//                 console.log("sum", sum);
//                 console.log("-----------");
//                 if (curr == curr_2 || curr == curr_3 || curr_2 == curr_3) {
//                     console.log("same: ", curr, curr_2, curr_3);
//                     count--;
//                     answer.pop();
//                     console.log("count", count);
//                 }
//                 else if (curr > curr_2 || curr > curr_3 || curr_2 > curr_3) {
//                     console.log("big: ", curr, curr_2, curr_3);
//                     count--;
//                     answer.pop();
//                     console.log("count", count);
//                 }

//             }
//         }
//     }
//     console.log(count);
//     console.log(answer);
//     findPrime(answer);
// }

// console.log(solution([1, 2, 3, 4])); // 1
//console.log(solution([1, 2, 7, 6, 4])); //4