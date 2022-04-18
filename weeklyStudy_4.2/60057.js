// 문자열에서 1개 이상 단위로 문자열을 잘라 압축하여
// 표현한 문자열 중 가장 짧은 것의 길이를 리턴
function solution(s) {
    for (i = 0; i < s.length; i++) {
        let letter = s[i];
        console.log(s.split(''));
    }
}

console.log(solution("aabbaccc")); //7
// console.log(solution("ababcdcdababcdcd")); //9