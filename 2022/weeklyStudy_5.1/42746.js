function solution(numbers) {
    // 1. 맨 앞자리 수만 뽑기
    let repeated = [];
    let noRepeated = [];
    let firstResult = [];

    for (i = 0; i < numbers.length; i++) {
        firstResult.push((numbers[i] + '').split('')[0]);
    }
    console.log(firstResult);

    for (i = 0; i < firstResult.length; i++) {
        let tmp;
        if (noRepeated.length == 0) noRepeated.push(firstResult[i]);
        else {
            if (noRepeated[noRepeated.length - 1] == firstResult[i]) {
                tmp = noRepeated[noRepeated.length - 1];
                repeated.push(tmp);
                repeated.push(numbers[i]);
            }
            else {
                noRepeated.push(firstResult[i]);
            }
        }
    }
    console.log("repeated", repeated);
    console.log("noRepeated", noRepeated);
}

// console.log(solution([6, 10, 2])); //"6210"
console.log(solution([3, 30, 34, 5, 9])); //"9534330"