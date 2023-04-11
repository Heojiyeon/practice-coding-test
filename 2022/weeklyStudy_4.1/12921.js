// function solution(n) {
//     // 주어진 수가 소수면 true, 소수 아니면 false
//     let answer = false;
//     for (i = 2; i < n; i++) {
//         if (n % i == 0) {
//             return answer;
//         }
//     }
//     return !answer;

// }

// function solution2(n) {
//     // 주어진 수가 소수이면 count++
//     let count = 0;
//     for (i = 2; i < n; i++) {
//         if (n % i == 0) {
//             return count;
//         }
//     } count++
//     return count;
// }

// 소수 여부 확인 함수 true/false 리턴
function findPrime(num) {
    let result = false;

    if (num == 2) return !result;
    else {
        for (j = 2; j < num; j++) {
            if (num % j == 0) return result;
            else {
                if (j == (num - 1)) return !result;
            }
        }
    }
}

function solution3(n) {
    let count = 0;
    let answer = false;
    for (i = 2; i <= n; i++) {
        answer = findPrime(i);
        console.log("i: ", i, "answer: ", answer);
        if (answer) {
            count++;
        }
    }
    return count;

}

console.log(solution3(9)); //2, 3, 5, 7 => 4
// console.log(solution3(10)); // 2, 3, 5, 7 => 4
// console.log(solution3(5)); //3

// console.log(solution(10)); // 4 -> 10은 false
// console.log(solution(5)); // 3 -> 5는 true

// console.log(solution2(10)); // 4 -> 10은 false
// console.log(solution2(5)); // 3 -> 5는 true
