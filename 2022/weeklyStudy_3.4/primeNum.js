// 소수 찾기
/*
function solution(n) {
    let count = 0;
    let result = 0;
    for (i = 2; i <= n; i++) {
        if (i % 2 == 0 || i % 3 == 0) {
            count++;
        }
    }
    if (count = 2) {
        result = count;

    } return result;
}
*/
/*function solution(n) {
    let count = 0;
    let result = 0;

    for (i = 1; i <= n; i++) {
        for (j = 1; j <= i; j++) {
            if (i % j == 0) {
                count += 1;
            }
        }
        if (count == 2) {
            result += 1;
        }
    }
    return result;
}
*/
function solution(n) {
    let count = 0;

    // 1을 제외한 n까지의 수
    for (i = 2; i <= n; i++) {
        console.log("i번째 수", i);
        // i (2~n-1) 가 소수인지 판단
        for (j = 2; j < i; j++) {
            console.log(j);
            if (i % j == 0) console.log("not prime");
        }
        count++;
    }
    return count;
}


// console.log(solution(10)); // 4
console.log(solution(5)); // 3