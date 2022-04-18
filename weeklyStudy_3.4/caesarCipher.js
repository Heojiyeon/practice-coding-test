/*
function solution(s, n) {
    let answer = '';
    let idx;
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    for (i = 0; i < s.length; i++) {
        if (s[i] != ' ') {
            idx = alphabet.indexOf(s[i]) + n;
            answer + alphabet[idx];
        } answer += ' ';
    }
    return answer;
}
*/

function solution(s, n) {
    let answer = '';
    let idx;
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const alphabet_low = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (i = 0; i < s.length; i++) {
        if (s[i] != ' ') {
            idx = alphabet.indexOf(s[i]) + n;
            idx > 25 ? idx -= 26 : idx;
            answer += alphabet[idx];
        } answer += ' ';
    }
    return answer;
}

console.log(solution("AB", 1));
console.log(solution("z", 1));
console.log(solution("a B z", 4));