function selectDepartment(min, d, currCount) {
    let selected = [];
    for (i = min; i < d.length; i++) {
        if (selected.length != currCount) selected.push(d[i]);
    }
    return selected;
}

function sumSelected(currD) {
    let sum = currD.reduce((a, b) => a + b);
    return sum;
}

function solution(d, budget) {
    if (d.reduce((a, b) => a + b) == budget) return d.length;

    else {
        d.sort((a, b) => a - b);
        let min = 0;
        let currCount = d.length - 1;
        let currD = selectDepartment(min, d, currCount);
        let currSum = sumSelected(currD);
        let max = currD.length - 1;
        console.log(currSum);
        do {
            if (currSum > budget) {
                currCount--;
                currD = selectDepartment(min, d, currCount);
            }
            else if (currSum < budget) {
                if (currD[max] != d[d.length - 1]) {
                    currD.pop();
                    max += 1;
                    console.log("max", max);
                    currD.push(d[max]);
                    console.log(currD);
                }
            }

            currSum = sumSelected(currD);
            console.log(currSum);

        } while (currSum != budget);
    }
}
console.log(solution([1, 3, 2, 5, 4], 9)); //3
// console.log(solution([2, 2, 3, 3], 10)); //4