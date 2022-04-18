// 없는 숫자 더하기
function solution(numbers) {
    const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let answer = num.reduce((prev, curr) => prev + curr);
    for (i = 0; i < numbers.length; i++) {
        answer -= numbers[i];
    }
    console.log(answer);

}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0])); //14
// console.log(solution([5, 8, 4, 0, 6, 7, 9])); //6
