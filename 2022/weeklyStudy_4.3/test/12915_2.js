// n번째 글자를 기준으로 오름차순 정렬
function handleSame(a, b) {
    console.log(sort((a, b) => a - b));
}
function solution(strings, n) {
    let result = strings.sort(function (a, b) {
        let x = a[n];
        let y = b[n];
        if (x < y) return -1;
        if (x > y) return 1;
        if (x == y) {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        }
    });
    return result;
}
//console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));