function solution(left, right) {
    let totalCount = 0;
    for (i = left; i <= right; i++) {
        let currNum = i;
        let count = 0;
        console.log(currNum);

        for (j = 1; j <= currNum; j++) {
            if (currNum % j == 0) {
                count++;
            }
        }
        console.log(currNum, count);
        if (count % 2 == 0) {
            totalCount += currNum;
        } else {
            totalCount -= currNum;
        }
    }
    console.log(totalCount);
}

console.log(solution(13, 17)); // 43