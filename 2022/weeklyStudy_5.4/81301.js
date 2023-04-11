// function solution(s) {
//     const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//     let result = '';
//     let currWords = '';

//     for (i = 0; i < s.length; i++) {
//         if (s[i] * 1 || s[i] == 0) result += s[i];
//         else {
//             currWords += s[i].toLowerCase();
//             if (nums.includes(currWords)) {
//                 result += nums.indexOf(currWords) * 1;
//                 currWords = '';
//             }
//         }
//     }
//     return result*1;
// }

function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four",
        "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for (let i = 0; i < numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        console.log(arr);
        answer = arr.join(i);
        console.log(answer);
    }

    return Number(answer);
}

console.log(solution("one4seveneight"));//1478
// console.log(solution("23four5six7")); //234567
// console.log(solution("2three45sixseven"));//234567
// console.log(solution("123")); //123
// console.log(solution("101zero")); //1010