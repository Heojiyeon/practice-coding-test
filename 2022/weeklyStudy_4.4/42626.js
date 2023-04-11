function solution(scoville, K) {
    let count = 0;
    scoville.sort((a, b) => a - b);

    for (i = 0; i < scoville.length; i++) {
        let min, secondMin;
        if (!min) min = scoville[i];
        secondMin = scoville[i + 1];
        let currSum = min + (secondMin * 2);
        count++;
        if (currSum < K) {
            min = currSum;
        }
        if (currSum > K) return count;
    }
}

console.log(solution([1, 2, 3, 9, 10, 12], 7)); //2