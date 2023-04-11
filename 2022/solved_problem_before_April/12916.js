function counting(S, letter) {
    let count = 0;
    S.filter((o) => o == letter ? count++ : null);
    return count;
}
function solution(s) {
    let answer = true;
    const P = "P";
    const Y = 'Y';
    const S = s.toUpperCase().split('');
    counting(S, P) == counting(S, Y) ? answer : answer = false;
    return answer;
}

console.log(solution("pPoooyY")); // true
console.log(solution("Pyy")); // false
console.log(solution("oooo")); // true