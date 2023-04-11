function solution(x) {

    const answer = true;

    const str = String(x);
    let sum = 0;
    for (i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    if (x % sum == 0) return answer;
    else return !answer;


}

console.log(solution(11));
solution(120);
