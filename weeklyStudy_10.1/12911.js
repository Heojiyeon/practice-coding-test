function solution(n) {

    const countOne = (curr) => curr.toString(2).split('').filter((val) => val == 1).length;

    let count = 0;
    let target = countOne(n);
    let result = n;
    console.log(target);
    while (count != target) {
        result++;
        count = countOne(result);
        console.log("curr count", count);
    }
    return result;
}

console.log(solution(78)); //83

console.log(solution(15)); //23