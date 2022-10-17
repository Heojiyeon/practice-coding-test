function solution(n) {
    let result = 0;

    for (i = 1; i < n; i++) {
        let currNum = i;
        if (findSum(currNum, n)) result++;
    }
    return result + 1;
}

function findSum(currNum, n) {
    let sum = 0;
    let j = currNum;
    while (currNum < n) {
        sum += j;
        if (sum == n) return true;
        else if (sum > n) return false;
        j++;
    }
}

console.log(solution(15)); //4