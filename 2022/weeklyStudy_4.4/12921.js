// 소수 찾기
function solution(n) {
    const arr = new Array(n).fill(1);
    console.log(arr);
    arr[0] = 0;
    for (let i = 2; i * i <= n; i++) {
        for (let j = i * i; j <= n; j += i) {
            arr[j - 1] = 0;
        }
    }
    console.log(arr);
    return arr.filter((el) => el == 1).length;
}



// console.log(solution(10)); // 4
console.log("--------------");
console.log(solution(5)); // 3