function solution(n) {
    let num = n + '';
    let answer = 0;
    let arr = num.split("");
    for (i = 0; i < num.length; i++) {
        answer += arr[i] * 1;
    }
    console.log(answer);
}

solution(123);
// 6
solution(987);
// 24