function solution(d, budget) {
    if (d.reduce((a, b) => a + b) <= budget) return d.length;
    else {
        let sum = 0;
        let count = 0;
        d.sort((a, b) => a - b);
        for (i = 0; i < d.length; i++) {
            sum += d[i];
            if (sum <= budget) {
                count++;
                console.log("sum", sum, "count", count);
            }
        }
        console.log(count);
    }
}

console.log(solution([1, 3, 2, 5, 4], 9)); //3
// console.log(solution([2, 2, 3, 3], 10)); //4