function solution(s) {
    let result = '';
    s = s.split(" ").sort((a, b) => a - b);
    result += s[0];
    result += " ";
    result += s[s.length - 1];
    return result;
}

console.log(solution("1 2 3 4"));//	"1 4"
console.log(solution("-1 -1"));//	"-1 -1"