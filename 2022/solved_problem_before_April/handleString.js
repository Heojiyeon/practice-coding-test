function solution(s) {
    let answer = true;
    if (s.length != (4 || 6)) {
        return answer = false;
    }
    for (i = 0; i < s.length; i++) {
        // s[i] * 1 ? answer : answer = false;
        let result = s[i] * 1;
        if (result == 0) answer;
        else {
            result ? answer : answer = false;
        }

    }
    return answer;
}

// console.log(solution("a123"));
// console.log(solution("1234"));
// console.log(solution("1e23"));
// console.log(solution("123 "));
console.log(solution("0000"));