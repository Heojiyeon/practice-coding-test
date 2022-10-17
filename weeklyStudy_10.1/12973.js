function solution(s) {
    let tmp = [];
    for (i = 0; i < s.length; i++) {
        tmp.push(s[i]);
        console.log(tmp);
        if (tmp[tmp.length - 1] == tmp[tmp.length - 2]) {
            tmp.pop();
            tmp.pop();
        }
    }
    return tmp.length == 0 ? 1 : 0;
}


console.log(solution("baabaa")); //1
console.log(solution("b")); //0
console.log(solution("cdcd")); //0