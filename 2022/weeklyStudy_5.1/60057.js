// function handleArr(arr) {
//     let result = 0;
//     for (i = 0; i < arr.length; i = j) {
//         let prev = arr[i];
//         let count = 0;
//         for (j = i + 1; j < arr.length; j++) {
//             let curr = arr[j];
//             if (prev == curr && count == 0) {
//                 count += 2;
//             }
//             else if (prev == curr && count != 0) {
//                 count += 1;
//             }
//             else if (prev != curr) {
//                 count += 1;
//                 break;
//             }
//         }
//         if (count >= 2) {
//             result += 2;
//         }
//         else if (count == 1) {
//             result += 1;
//         }
//         console.log(prev, result);
//         count = 0;
//     }
//     console.log("real result", result);
// }

// console.log(handleArr(['a', 'a', 'b', 'b', 'a', 'c', 'c', 'c']));
//2a2ba3c => 7
// console.log(handleArr(['ab', 'ab', 'cd', 'cd', 'ab', 'ab', 'cd', 'cd']));
// 2ab2cd2ab2cd, 12

// result string 값 만들어서 총 길이 리턴
function handleArr(arr) {
    let result = '';
    for (i = 0; i < arr.length; i = j) {
        let prev = arr[i];
        let count = 1;
        for (j = i + 1; j < arr.length; j++) {
            let curr = arr[j];
            if (prev == curr) {
                count++;
            }
            else break
        }
        if (count != 1) {
            result += count;
            result += prev;

        } else {
            result += prev;
        }
    }
    return result.length;
}

function solution(s) {
    //substr
    let splitResult = [];
    let arr = [];

    for (i = 1; i <= s.length; i++) {
        let currSize = i;
        for (j = 0; j < s.length; j = j + currSize) {
            arr.push(s.substr(j, currSize));
        }
        splitResult.push(arr);
        arr = [];
    }
    let answer = 0;
    let real = [];
    splitResult.forEach((e) => {
        answer = handleArr(e);
        real.push(answer);
    });
    return Math.min(...real);
}

console.log(solution("aabbaccc")); //7
console.log(solution("ababcdcdababcdcd")); //9
console.log(solution("abcabcdede")); //8
console.log(solution("abcabcabcabcdededededede")); //14
console.log(solution("xababcdcdababcdcd")); //17