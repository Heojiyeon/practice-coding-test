function solution(A, B) {
    const sortArr = (arr) => arr.sort((a, b) => a - b);
    A = sortArr(A);
    B = sortArr(B);

    let result = 0;
    let curr = 0;
    const LEN = A.length - 1;

    while (curr <= LEN) {
        result += (A[curr] * B[LEN - curr]);
        curr++;
    }

    return result;
}
console.log(solution([1, 4, 2], [5, 4, 4])); //29