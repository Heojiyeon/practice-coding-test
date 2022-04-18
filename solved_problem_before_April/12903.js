function solution(s) {
    const idx = s.length / 2;
    return s.length % 2 != 0 ? s.slice(idx, idx + 1) : s.slice(idx - 1, idx + 1);
}

console.log(solution("abcde")); //c
console.log(solution("qwer")); //we