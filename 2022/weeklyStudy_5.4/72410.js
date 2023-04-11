// 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
// 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
// 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
// 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
// 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
//      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

// function solution(new_id) {
//     console.log(new_id);
//     let result = new_id.toLowerCase();
//     console.log("1: ", result);
//     let second = /[^a-z0-9-_.]/g;
//     result = result.replace(second, '');
//     console.log("2: ", result);
//     let third = /\.\.+/g;
//     result = result.replace(third, '.');
//     console.log("3: ", result);
//     let fourth = /^\.|\.$/g;
//     result = result.replace(fourth, '');
//     console.log("4: ", result);
//     if (result.length == 0) result += 'a';
//     console.log("5: ", result);
//     if (result.length >= 16) result = result.slice(0, 15);
//     // console.log("6: ", result);
//     else if (result.length <= 2) {
//         let last = result[result.length - 1];
//         while (result.length < 3) {
//             result = result.concat(...last);
//         }
//     }
//     console.log("7: ", result);
// }

function solution(new_id) {
    let result = new_id.toLowerCase()
        .replace(/[^a-z0-9-_.]/g, '')
        .replace(/\.\.+/g, '.')
        .replace(/^\.|\.$/g, '');
    if (result.length == 0) result += 'a';
    else if (result.length >= 16) result = result.slice(0, 15);
    if (result.length <= 2) {
        let last = result[result.length - 1];
        while (result.length < 3) result = result.concat(...last);
    }
    if (result[result.length - 1] == '.') result = result.slice(0, result.length - 1);
    return result;
}

console.log(solution("abcdefghijklmn.p")); //"abcdefghijklmn"
// console.log(solution("...!@BaT#*..y.abcdefghijklm"));// "bat.y.abcdefghi";
// console.log(solution("=.="));
// console.log(solution("z-+.^.")); //"z--"