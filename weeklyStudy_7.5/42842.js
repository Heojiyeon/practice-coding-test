function solution(brown, yellow) {
    let cases = [];
    let brownCol = 0;
    let brownLow = brown + 4 - (brownCol * 2);

    // 1. brown의 가능한 row, col 계산
    while (true) {
        let currCase = [];
        brownLow = brown + 4 - (brownCol * 2);
        if (brownLow <= brownCol) break;
        currCase.push(brownLow / 2, brownCol);
        cases.push(currCase);
        brownCol++;
    }
    console.log("last cases", cases);

    // 2. yellow의 가능한 row, col 계산
    return cases.filter((each) => each[0] >= each[1] && (each[0] - 2) * (each[1] - 2) == yellow)[0];
    // console.log("result", result);
}

console.log(solution(10, 2)); //[4,3]
// console.log(solution(8, 1)); //[3, 3]
// console.log(solution(24, 24)); //[8,6]