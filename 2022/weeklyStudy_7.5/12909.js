
function solution(s) {
    let left = 0;
    let right = 0;
    let result = true;
    if (s[0] == ")") return !result;

    for (i = 0; i < s.length; i++) {
        s[i] == "(" ? left++ : right++;
        if (left < right) return !result;
    }
    return left != right ? !result : result;
}

console.log(solution("()()")); //true
console.log(solution("(())()")); //true
console.log(solution(")()(")); //false
console.log(solution("(()(")); //false